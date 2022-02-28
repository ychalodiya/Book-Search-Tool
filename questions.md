Technical questions:

Please answer the following questions in a markdown file called Answers to technical questions.md.

1. How long did you spend on the coding assignment?
I have spent 5-6 hours on building this application.

a. What would you add to your solution if you had more time?
If I had more time, I could think about introducing voice over functionality for the search tool. That way user can search of any books without using keyboard or mouse.

b. If you didn&#39;t spend much time on the coding test, then use this as an opportunity to
explain what you would add. 
I haven't added sorting by publishing date as I've noticed that API isn't returning the date in one formate sometimes it shows just the year and sometimes it shows month, day and year. That's the reason, I haven't add solution to that problem.

2. What was the most useful feature that was added to the latest version of your chosen
language? Please include a snippet of code that shows how you&#39;ve used it.
I have added 'Recent Search History' feature which keep track of user's recent search words and save it into the localstorage.

Here's code snippet which stores the searched words into the localstorage.

const submitQuery = (e) => {
        e.preventDefault();
        document.getElementById('sort').value = 'empty';
        setRecentSearchWord([searchWord, ...recentSearchWord]);
        window.localStorage.setItem('recent', JSON.stringify([searchWord, ...recentSearchWord]));
        fetchData();
        document.getElementById('search').focus()
}

3. How would you track down a performance issue in production? Have you ever had to do this?
By monitoring logs status to identify how long it takes a backend endpoint to process the given data as well as I prefer debugging each component to find there's no memory leak or redundant data. I have used this approach whenever I finish working on building a new feature or fix any bugs/issues. In addition, I also consider peer code review which is also helpful for tracking down performance issue.

4. How would you improve the API that you just used?
I would definitely keep some information readily available and keep it consistent. I faced difficulty when I was looking for the production date. It wasn't consistent. To my mind, there should be the launch date of every book if they've assigned ISBN number. If it's not possible, they can introduce flag which allows them filter the book info when it met the specific standard.

5. Please describe yourself using correctly formatted JSON.
{
    Name: 'Yogeshbhai Chalodiya',
    City: 'Toronto',
    Designation: 'Front end Developer',
    Current Employer: 'Trader Corporation',
    Area of expertise: 'Javascript',
    Summary: 'I'm passionate front-end developer who specialized in building and enhance the web application by following the latest tech stack and coding standard. In my free time, I'm also focusing on improving myself continuously by attending online certificate courses which focus on upcoming tools and technology.'
}