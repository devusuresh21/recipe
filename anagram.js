
const str1 = "listen";
const str2 = "silent";

const formatString = (str) => str.replace(/\W/g, '').toLowerCase().split('').sort().join('');

if (formatString(str1) === formatString(str2)) {
    console.log(`${str1} and ${str2} are anagrams.`);
} else {
    console.log(`${str1} and ${str2} are not anagrams.`);
}
