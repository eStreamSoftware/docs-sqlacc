const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

module.exports = function(context, options) {
  return {
    name: 'generate-help-json',
    
    async postBuild({ siteConfig, routesPaths, outDir }) {
      let docsDir;
      docsDir = path.join(context.siteDir, options.docsPath);
      if (!fs.existsSync(docsDir)) {
        console.warn(`Warning: Docs directory not found: ${docsDir}`);
        return;
      }
      
      const markdownFiles = getAllMarkdownFiles(docsDir);
      const helpData = [];
      const formNameMap = {}; 
      const duplicates = []; 
      
      for (const fullPath of markdownFiles) {
        const filePath = path.relative(docsDir, fullPath);
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        
        try {
          const { data: frontMatter } = matter(fileContent);
          
          if (frontMatter && frontMatter.form_name) {
            let permalink = frontMatter.slug;
            if (!permalink) {
              console.warn(`WARNING: No slug found for ${filePath}`);
            }
            
            if (formNameMap[frontMatter.form_name]) {
              duplicates.push({
                form_name: frontMatter.form_name,
                existingFile: formNameMap[frontMatter.form_name],
                newFile: filePath
              });

              console.warn(`WARNING: Duplicate form_name "${frontMatter.form_name}" found in:`);
              console.warn(`  1. ${formNameMap[frontMatter.form_name]}`);
              console.warn(`  2. ${filePath}`);
              console.warn(`  Using the first occurrence for help.json`);

              continue;
            }
            
            formNameMap[frontMatter.form_name] = filePath;
            
            helpData.push({
              Name: frontMatter.form_name,
              Path: permalink
            });
          }
        } catch (err) {
          console.warn(`Error processing ${filePath}:`, err);
        }
      }
      
      let targetDir = outDir;
      const outputPath = path.join(outDir, options.outputPath);

      if (fs.existsSync(outputPath) && fs.statSync(outputPath).isDirectory()) {
        targetDir = outputPath;
      }

      const helpJsonPath = path.join(targetDir, 'help.json');
      fs.writeFileSync(
        helpJsonPath, 
        JSON.stringify(helpData, null, 2)
      );

      if (duplicates.length > 0) {
        const duplicatesPath = path.join(targetDir, 'help-duplicates.json');
        fs.writeFileSync(
          duplicatesPath,
          JSON.stringify(duplicates, null, 2)
        );
        console.warn(`Found ${duplicates.length} duplicate form_name entries. See help-duplicates.json for details.`);
      }

      console.log(`Generated HELP.json with ${helpData.length} entries in ${targetDir}`);
    }
  };
};