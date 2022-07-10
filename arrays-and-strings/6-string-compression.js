/**
 * Solved from - CTCI book
 *
 * Problem - Implement a method to perform basic string compression using the count of repeated characters.
 * For example, the string aabcccaaa would become a2b1c3a3. If the compressed string would not become smaller than 
 * the original string your method should return the original string.
 *
 */
/**
 * TO-DO: This program is incorrect since I have not verified the order of characters
 */
function strCompression(str) {
    let count = 1;
    let newStr = '';
    const strLength = str.length;
    for(let i=0; i<strLength; i++) {
        if(i+1 >= strLength || str[i] !== str[i+1]) {
            newStr += str[i] + count;
            count = 1;
        } else {
            count += 1;
        }
    }

    return newStr.length < strLength ? newStr : str;
}

console.log(strCompression("abbbbbbbbbba"));

/**
 * Found this problem on Coding Ninjas platform with a small variation. Append count to compressed string if count > 1.
 * For example, aabcccaaa would become a2bc3a3. 
 * But the platform didn't have JS as programming language for this problem to implemented it in Java, but the logic is same
 * as above problem.
 */

/**
 *  JAVA solution
 
 public class Solution {
	public static String compressTheString(String s) {
		// Write your code here
	    StringBuilder sb = new StringBuilder();
        int count = 1;
        int strLength = s.length();
        for(int i=0; i< strLength; i++) {
            if(i+1 >= strLength || s.charAt(i) != s.charAt(i+1)) {
                sb.append(s.charAt(i));

                // this is the variation from original problem
                if(count > 1) {
                    sb.append(count);
                }
                count = 1;
            } else {
                count += 1;   
            }
        }
        return sb.toString();
    }

}
*/
