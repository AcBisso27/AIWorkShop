### What does the tool do?
The 'firstf' file is used to search for a word or phrase, but only within the first number of lines specified. If there are 15 lines of code, and only 5 are requested, only 5 lines will be presented. It can be further modified by designating the 5 lines at the head of the script (first 5), or tail of the script (last 5). It prints the lines that match the request.

### How to run it.
The file can be activated by a command like "node firstf.js fox grep_practice.txt 5", which will present the first 5 lines that include the word 'fox'. The command can be modified to fit other perameters.

### What commands it combines.
The file 'firstfs' combines the functions of 'head' and 'grep'. 'head' will limit the search to the first 5 lines of code, while 'grep' will locate and designate lines of code that match the requested description (ie:fox) for printing. Together, the command will result in the first 5 lines of code that have the word "fox" in them.
