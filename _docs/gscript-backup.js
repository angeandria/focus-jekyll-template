function exportToJSON(folderName) {

  // Name of the json file to create
  var jsonFile = "pages";

  // Define folder IDs for different folders
  var folderIds = {
    "Tests": "1VPcqdQvNziLDFYXffqIgfYAjoxpz2GXU", // Replace with actual folder ID
    "Folder2": "your_folder_id_2",
    "Folder3": "your_folder_id_3"
  };


  // ID of the json row to create
  var fileID = "file";
  fileID = fileID.toLowerCase().replace(/\s+/g, '-');
  
  // Additional logging
  Logger.log('Attempting to export to folder: ' + folderName);

  // Get the active spreadsheet and the first sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Fetch all data as a 2D array
  var data = sheet.getDataRange().getValues();
  
  // Extract headers
  var headers = data[0];
  
  // Initialize an array to hold JSON objects
  var jsonArray = [];
  
  // Select folder ID based on input parameter
  var selectedFolderId = folderIds[folderName];
  
  if (!selectedFolderId) {
    Logger.log('Invalid folder name provided.');
    return;
  }
  
  Logger.log('Selected Folder ID: ' + selectedFolderId);

  var folder = DriveApp.getFolderById(selectedFolderId);

  // Check if a file with the same name already exists and delete it
  var existingFiles = folder.getFilesByName(jsonFile + '.json');
  while (existingFiles.hasNext()) {
    var file = existingFiles.next();
    file.setTrashed(true);
  }

  // Initialize arrays to hold blobs for zipping
  var markdownBlobs = [];
  var contentBlobs = [];

  // Convert headers to lowercase and replace spaces with hyphens
  var transformedHeaders = headers.map(header => header.toLowerCase().replace(/\s+/g, '-'));

  // Find indices of relevant columns using transformed headers
  var fileIDIndex = transformedHeaders.indexOf("file");
  var permalinkIndex = transformedHeaders.indexOf("permalink");
  var aliasesIndex = transformedHeaders.indexOf("aliases");

  // Check if any required column is missing
  if (fileIDIndex === -1 || permalinkIndex === -1 || aliasesIndex === -1) {
    Logger.log('One or more required columns are missing.');
    return;
  }

  // Loop through each row (starting from the second row)
  for (var i = 1; i < data.length; i++) {
    // Check if the "id" column is not empty
    if (data[i][headers.indexOf(fileID)] !== "") {
      var rowObject = {};
      var categoriesArray = []; 
      var tagsArray = [];       
      var info1Array = [];      
      var info2Array = [];      

      // Create an object for each row using headers as keys
      for (var j = 0; j < headers.length; j++) {

        // Transform header to lowercase and replace spaces with hyphens
        var transformedHeader = headers[j].toLowerCase().replace(/\s+/g, '-');
        
        if (transformedHeader.startsWith('category-')) {
          if (data[i][j]) { 
            categoriesArray.push(data[i][j].toString());
          }
        } else if (transformedHeader.startsWith('tag-')) {
          if (data[i][j]) { 
            tagsArray.push(data[i][j].toString());
          }
        } else if (transformedHeader.startsWith('info-1')) {
          if (data[i][j]) { 
            info1Array.push(data[i][j].toString());
          }
        } else if (transformedHeader.startsWith('info-2')) {
          if (data[i][j]) { 
            info2Array.push(data[i][j].toString());
          }
        } else {
          rowObject[transformedHeader] = data[i][j];
        }
      }

      rowObject['categories'] = categoriesArray;
      rowObject['tags'] = tagsArray;
      rowObject['info1'] = info1Array;
      rowObject['info2'] = info2Array;

      jsonArray.push(rowObject);

      // Create blobs for Markdown and content files
      createMarkdownBlobs(markdownBlobs, contentBlobs, fileIDIndex, permalinkIndex, aliasesIndex, data[i], rowObject);
    }
  }

  // Convert the array of objects to JSON format
  var jsonOutput = JSON.stringify(jsonArray, null, 2);
  
  Logger.log(jsonOutput);
  
  Logger.log('Creating new file: ' + jsonFile + '.json');

  // Save the JSON output to a file in the specified folder
  var newFile = folder.createFile(jsonFile + '.json', jsonOutput, MimeType.PLAIN_TEXT);
  
  Logger.log('JSON file created: ' + newFile.getUrl());

  // Create a zip file with Markdown files and _content folder
  createZipFile(folder, jsonFile, markdownBlobs, contentBlobs);
  
  showJsonDialog(jsonOutput);
}

function createMarkdownBlobs(markdownBlobs, contentBlobs, fileIDIndex, permalinkIndex, aliasesIndex, rowData, rowObject) {
  
  var contentFolder = "_content";
  
  // Assign values for every frontmatter property
  var valuesObject = {};
    // Assign values for every frontmatter property
  for (var key in rowObject) {
    if (rowObject.hasOwnProperty(key)) {
      // Store the value in the object
      valuesObject[key] = rowObject[key] || '';
    }
  }
  
  
  // Specific values
  var fileID = rowData[fileIDIndex] || '';
  valuesObject['file'] = fileID;
  //valuesObject.push(['file', fileID]);

  var permalink = rowData[permalinkIndex] || '';
  valuesObject['permalink'] = permalink;
  //valuesObject.push(['permalink', permalink]);

  var aliasesString = rowData[aliasesIndex] || '';

  var aliases = aliasesString.split(',').map(alias => alias.trim());  
  // Format aliases and add it back to rowObject
  valuesObject['aliases'] = '- ' + aliases.join('\n  - ');
  
  // Assuming categories and tags are accessible from rowData
  var categories = rowObject['categories'] || [];  
  valuesObject['categories'] = '- ' + categories.join('\n  - ');
  //valuesObject.push(['categories', categories]);

  var tags = rowObject['tags'] || [];
  valuesObject['tags'] = '- ' + tags.join('\n  - ');  
  //valuesObject.push(['tags', tags]);

  var info1 = rowObject['info1'] || [];
  valuesObject['info1'] = '- ' + info1.join('\n  - ');
  //valuesObject.push(['info1', info1]);

  var info2 = rowObject['info2'] || [];  
  valuesObject['info2'] = '- ' + info2.join('\n  - ');
  //valuesObject.push(['info2', info2]);
  
  var dynamicContent = '';
  for (var key in valuesObject) {
      if (valuesObject.hasOwnProperty(key)) {
          var value = valuesObject[key] || '';
          dynamicContent += `${key}: ${value}\n`;
      }      
  }
  var frontMatterContent = `---
  ${dynamicContent}
  ---`;

  /*
  var frontMatterContent = `---

  ${dynamicContent}

# File
file: ${fileID}
permalink: /${permalink}
content_file: "[[${contentFolder}/${fileID}.md]]"
aliases: 
  - ${aliases.join('\n  - ')}  
lang: ${lang}
sitemap: ${sitemap}
hidden: ${hidden}
allow_recursion: ${allow_recursion}

# Layout
layout: ${layout}
template: ${template}
classes:  

# Content
title:  ${title}
title_before: ${title_before}
title_after:  ${title_after}
subtitle: ${subtitle}
description: ${description}
excerpt: ${excerpt}
custom_excerpt: ${custom_excerpt}
featured_image: ${featured_image}
caption: ${caption}
teaser_image: ${teaser_image}
featured_logo: ${featured_logo}
categories:
  - ${categories.join('\n  - ')}
tags:
  - ${tags.join('\n  - ')}
info-1: 
  - ${info1.join('\n  - ')}  
info-2: 
  - ${info2.join('\n  - ')}
taxonomy: ${taxonomy}
collection: ${collection}
entries_layout: : ${entries_layout}

# Meta
featured: ${featured}
priority: ${priority}
status: ${status}
author: ${author}
author_profile: ${author_profile}
date: ${date}
last_modified_at: ${last_modified_at}
show_page_title: ${show_page_title}
show_date: ${show_date}
show_footer_date: ${show_footer_date}
show_pagination: ${show_paginationt}
show_taxonomy: ${show_taxonomy}
comments: ${comments}
read_time: ${read_time}
related: ${related}
share: ${share}

# Navigation
navigation: ${navigation}
breadcrumbs: ${breadcrumbs}
resource: ${resource}
---`;
*/

  var includeMarkdownContent = `
{% capture include_markdown %}
{% include_relative {{ page.content_folder | default: site.content_folder }}/{{ page.file }}.md %}
{% endcapture %}
{{ include_markdown | markdownify }}
`;

  var markdownContent = `${frontMatterContent}\n\n${includeMarkdownContent}`;

  // Create blob for Markdown file
  markdownBlobs.push(Utilities.newBlob(markdownContent, 'text/plain', `${fileID}.md`));

  // Create empty blob for _content file
  contentBlobs.push(Utilities.newBlob('', 'text/plain', `_content/${fileID}.md`));
}

function createZipFile(folder, jsonFile, markdownBlobs, contentBlobs) {
  
  // Combine all blobs into one array
  var allBlobs = markdownBlobs.concat(contentBlobs);

  // Get current date and time for timestamp
  var currentDateTime = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd_HHmm');
  
  // Generate zip filename
  var zipFileName = `${jsonFile}-mdFiles-${currentDateTime}.zip`;
  
  // Create zip blob from all blobs
  var zipBlob = Utilities.zip(allBlobs, zipFileName);

  // Save the zip file to Google Drive in the specified folder
  var zipFile = folder.createFile(zipBlob);

  Logger.log("Created ZIP file: " + zipFile.getUrl());
}

function exportToFolder1() {
  exportToJSON('Tests');
}

function exportToFolder2() {
  exportToJSON('Folder2');
}

function showJsonDialog(jsonData) {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('JsonDialog')
      .setWidth(600)
      .setHeight(800);

  htmlOutput.append(`<script>loadJsonData(${JSON.stringify(jsonData)});</script>`);

  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Generated JSON');
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Export to JSON')
    .addItem('Export to Tests', 'exportToFolder1')
    .addItem('Export to Folder 2', 'exportToFolder2')
    .addToUi();
}