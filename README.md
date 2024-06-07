<h1>COA TASKFORCE TAKE HOME CHALLENGE</h1>
<h2>Overview</h2>

This project is a coding challenge where I evaluate my skills in HTML, CSS, and JavaScript through two main tasks: a UI design challenge and a coding challenge.

<h2>Installation</h2>
I have installed the following dependencies on my machine:

<li>
Node.js: Installed using the commands:
arduino
<pre>
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
</pre>
</li><br>
<li>
Additionally, I made my JavaScript files executable using the command:

<pre>
chmod +x *.js
</pre>
</li></br>
With these installations completed, I'm ready to work on the project.

<h2>Tasks Completed</h2>
<h3>UI Challenge: Interactive Photo Gallery</h3>
<li>Built a responsive photo gallery based on provided <a href="https://www.figma.com/design/XF6xlvvHBv12WFveDjVoso/COA-Take-home-Challenge?m=dev&node-id=0-1&t=fdBvdtZwkpw7inVP-1">Figma designs.</a></li>
<li>Ensured accurate representation across devices and browsers.</li>
<h3>Coding Challenge:</h3>
<li>Solved two JavaScript coding challenges:
<ol>
<li>Coding Challenge 1: Array Manipulation:
    <p>Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.</p>
    <b>Example:</b><br>
<b>input:</b> arr = [4, 2, 7, 1, 9, 5], target = 17 <br>
<b>Output:</b> true<br>
<b>Explanation:</b> The subarray [7, 1, 9] sums up to 17, which is equal to the target.
</li>
<li>Coding Challenge 2: String Transformation:
Given a string, transform it based on the following rules:
<ul>
<li>If the length of the string is divisible by 3, reverse the entire string.</li>
<li>If the length of the string is divisible by 5, replace each character with its ASCII code.</li>
<li>If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.</li>
<b>Example:</b> Input: "Hamburger"</br>
<b>Output:</b> "regrubmaH"</br>
<b>Explanation:</b> The length of the string is 9, which is divisible by 3 but not by 5 or 15.
Therefore, the string is reversed, resulting in "regrubmaH".</br>
<b>Example:</b> Input: "Pizza"<br>
<b>Output: </b>"80 105 122 122 97"</br>
<b>Explanation:</b> The length of the string is 5, which is divisible by 5 but not by 3 or 15.
Therefore, each character is replaced by its ASCII code, resulting in "80 105 122 122 97".</br>
<b>Example:</b> Input: "Chocolate Chip Cookie"</br>
<b>Output: </b>"eikooCpihCetalocohC"</br>
<b>Explanation:</b> The length of the string is 21, which is divisible by 3 but not by 5 or 15.
Therefore, the string is reversed, resulting in "eikooCpihCetalocohC".</br>
</ul>
</li>
</ol>
