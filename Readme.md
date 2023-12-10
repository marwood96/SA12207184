# COM4003 SA1: Student Job Board - Project Plan:

## Project Goal:
The goal of this project is to create a student/graduate-based job board that can be accessed by both students and businesses, with the primary intention being to help connect students and businesses directly to deliver employment in graduate roles. Students will be able to search for posted positions uploaded by various companies, and businesses will be able to search for student profiles and reach out to them directly if they fit the chosen roles criteria. The site will feature different profile systems for each type of user, with a variety of features to allow students to express their interests, define their personal skills, dictate the type of work they are searching for (Field of work, part-time/full-time) and a section to upload portfolio work that businesses can view. Businesses will be able to create a profile which will hold available job positions, desirable information about the company (Mission statement, benefits of working for the company). Both types of users will be able to upload a profile picture and contact details. The website has been designed to differentiate itself from competition by being focused on a specific age-bracket of employment (Graduates) and is designed to be an almost hybrid social media/job board site (Similar to LinkedIn). The benefits of the site being student based, means students can avoid some of the difficulties faced when applying for roles on traditional job board sites, for example, less competition and expectation upon the user having significant years in work experience, with many students feeling they have been ‘left behind’ because of the hyper-competitive job market (Conboye & Warwick-Ching, 2021).

## Installation:
At the moment, the application consists of only front-end technologies, and as such only requires the user to download the files included in the GitHub repository to be able to view and edit any materials. In the coming months, instructions will be included on how to install any dependencies such as server materials.
To edit any files, an ‘Integrated Development Environment’ will be required; a popular IDE software (Visual Studio Code) will be linked for download below.   

•	GitHub Repository: https://github.com/marwood96/SA12207184

•	Visual Studio Code: https://code.visualstudio.com/

To download the files, open the GitHub Repository and access the green dropdown button titled ‘< > Code’, then select the ‘Download ZIP’ option. 
Place this in a root position on your device, such as the desktop on a computer (To ensure file paths for images are valid) and then open your IDE. After the software launches, click the ‘File’ dropdown in the top left corner of the software, and select the ‘Open Folder’ option; find the folder containing the GitHub Repository that was linked for download and select it. After this, you should be ready to view and edit the code.
For later development, expect implementation of back-end technologies such as ‘MySQL’ as well as ‘PHP’. Once these have been implemented detailed instructions will be added to ensure the user is able to set up their own application.

## Project UI:
The project UI is currently designed using three different front-end frameworks, HTML, CSS and JavaScript. HTML to build the content of the page, Pure CSS for the styling of elements and JavaScript to enable advanced functionality when it comes to improving responsiveness and enabling the client to view different user-types (Business, Student and guest) views of pages in the prototype UI. 
To improve responsiveness and allow for an optimal user experience across all devices, whether mobile or desktop, the CSS had originally been implemented with the use of grid tables, but to modernise and incorporate a more scalable system the Flexbox CSS technology has been adopted, which inherently resizes the elements based on window size and resolution. Alongside Flexbox, media queries have been utilised to fine-tune styling and positioning on elements at various screen sizes. 
An example of this can be seen in the Header section, where with the usage of Media Queries and JavaScript we can give the Navigation elements different stylings at smaller resolutions and window sizes.

![ss1](https://github.com/marwood96/SA12207184/blob/main/Images/ss1.png?raw=true)
 

JavaScript allows the site to display multiple different variations of a page, for example on the Jobs page users will see a different page depending on the identity of the user; this is achieved by using JavaScript to set the Display style for the specific elements to either ‘block’ or ‘none’ depending on which button is pressed.

![ss2](https://github.com/marwood96/SA12207184/blob/main/Images/ss2.png?raw=true)

![ss3](https://github.com/marwood96/SA12207184/blob/main/Images/ss3.png?raw=true)

Legal and Risk Considerations:
Due to the nature and purpose of the application, unavoidably users’ personal details will be stored in the database; because the site is intended for business use, GDPR compliance must be adhered to. Breaking GDPR protocol can incur massive fines, the largest to date being ‘Meta’, who were fined 1.2 billion euros due to failure to comply (EDPB, 2023a).  To keep users’ information safe, the site will use ‘HTTPS’ to encrypt packets sent to-and-from the user and application. Services such as Cloudflare automatically grant ‘HTTPS’ usage for free as well as offering protection from denial-of-service attacks, so the application will likely employ these services (or a similar one). As well as the encryption protocols, student users will not be able to access other students’ info; ensuring only Businesses (as these are adherent to GDPR) can access this information.

## Timeline:
![ss4](https://github.com/marwood96/SA12207184/blob/main/Images/ss4.png?raw=true)

 


## Future objectives:
•	Implementation of back-end database (MySQL).\
•	Link front-end entry and search forms to database (PHP).\
•	After database has been implemented, add edit forms for profile page.\
•	Bug-test functionality of database and JavaScript elements.\
•	Test deployment.\




## References:

•	Conboye, J., & Warwick-Ching, L. (2021, June 28). - ‘I feel left behind’: graduates struggle to secure good jobs. Financial Times. https://www.ft.com/content/2fc4e1f4-a5e8-4cbd-9bd8-f51a43b01417

•	EDPB. (2023a). - 1.2 billion euro fine for Facebook as a result of EDPB binding decision | European Data Protection Board. https://edpb.europa.eu/news/news/2023/12-billion-euro-fine-facebook-result-edpb-binding-decision_en


## Website images:

•	Guthrie, C. (2023, October 20). - Editor’s note: Is AI a Pandora’s box? Mining Magazine. https://www.miningmagazine.com/sustainability/opinion/1461007/editors-note-october-2023

•	EUBN. (2022, August 24). - Why does a Business need an SEO Strategy to be Successful? EU Business News. https://www.eubusinessnews.com/why-does-a-business-need-an-seo-strategy-to-be-successful/

•	DANLAW. (2021, January 26). - Danlaw earns 3rd party recognition for ISO 26262 qualification. www.danlawinc.com. https://www.danlawinc.com/danlaw-embarks-3rd-party-recognition-iso-26262-qualification/




