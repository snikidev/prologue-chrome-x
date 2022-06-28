## Introduction

Thanks for taking the time to complete our coding test! It has two parts:

1. A task to build a Linkedin Profile scraper.
2. Some follow-up questions.

If you’ve got any questions at all on the task please email Patrick patrick@tryprologue.com or Whatsapp him on +44(0)7719633224.

The task should take 2 - 3 hours to complete. If you aren't able to get everything finished in time please just let us know what you would have done in the follow-up questions.
​

## The Task - Linkedin Profile Scraper

​
We would like you to build a chrome extension that parses a Linkeidn profile. A successful implementation of this task will work as follows:
​

- The extension will work when a user navigates to a Linkedin 'profile page'. That is pages that follow the URL pattern: `https://www.linkedin.com/in/<profileId>`.
- When a user navigates to a Linkedin profile page and clicks the extension [action icon](https://developer.chrome.com/docs/extensions/mv3/user_interface/#action) a [popup](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup) should appear which contains a single button with text 'Parse Profile'.
- When the above button is pressed the extension will programatically extract the Linkedin profile details. How you go about capturing these details is _entirely up to you_. Regardless of implementation, what we need is:
  - Name
  - Location
  - Experience
  - Education
- Write the above details to the popup window (the design/formatting doesn't matter).

When you extract the profile Experience and Education you'll need to programatically navigate to `/in/<profileId>/details/experience/` and `/in/<profileId>/details/education/` respectively to extract all of the historic entries. Once you've navigated to both return to the main profile screen.

**Technologies**

For this task use the following technologies:

- React + Typescript (take a look at [this](https://blog.logrocket.com/creating-chrome-extension-react-typescript/) blogpost for an introduction to developing chrome extensions with this stack - there are many others online for you to get a feel).
- [Chrome Extension Manifest V3 platform](https://developer.chrome.com/docs/extensions/mv3/intro/).

Feel free to use any other libraries you need (particularly for capturing the profile details).

**Delivery**

Your project should contain your source code as well as a `build` directory. We should be able to build your application by running `npm run build` in the root directory. We should be able to load the extension into our browser for testing by loading the `build` directory as unpacked. You can send your project to us over email or invite us to a Github repository.

**Assessment**

We will judge your solution on whether it is functional, the code quality/hygiene and the overall architecture of your solution. We've deliberately only asked you to spend 2 - 3 hours on this so that we can understand how you prioratise and where you choose to make your solution robust (and not so robust!) given a short time constraint.

We will go over your solution as part of the next stage of the interview process so we can better understand your thought process.

## Follow Up Questions

- If you had more time, what further improvements would you add?
- Which parts are you most proud of? And why?
- Which parts did you spend the most time with? What did you find most difficult?
- How did you find the assignment overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.
