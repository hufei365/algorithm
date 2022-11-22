/**
 * https://leetcode.cn/problems/maximum-number-of-non-overlapping-palindrome-substrings/description/
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

 var maxPalindromes = function(s, k) {
    const dp = new Array(s.length).fill(0)
        .map(() => new Array(s.length).fill(true))
    for (let i = 0; i < s.length; i ++) {
        dp[i][i] = true
    }
    for (let i = dp.length - 2; i >= 0; i --) {
        for (let j = i + 1; j < dp.length; j ++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1]
            } else {
                dp[i][j] = false
            }
        }
    }
    const dp2 = new Array(s.length).fill(0)
    for (let i = k - 1; i < s.length; i ++) {
        dp2[i] = dp2[i - 1] ?? 0
        for (let j = 0; j <= i - k + 1; j ++) {
            if (dp[j][i]) {
                dp2[i] = Math.max(dp2[i], (dp2[j - 1] ?? 0) + 1)    
            }
        }
    }
    return dp2[s.length - 1]
};

console.log(maxPalindromes("nidinhplkemyryyrymeklphnidinpwlkogggifpupxmxsxxsxmxpupfigggoklwpkxrrcrbytyjqbpbqidvwpymvgygvmypwvdiqbpbqjytybrcrrajrfvgwzmniukskuinmzwgvfremvyhunljhjbuszfozofzsubjhjlnuhyvmesodgkgvnyeobvvbbvvboeynvbkrmkkkkmrkbmhseoqhphkpimegfaelmwlibbbbilwmleafgemipkhphqoeshmehidggatdaeevevwqqlhncxlcpkvqnnqvkpclxcnhlqqwveveeadtaggdojcryfdckcuwwinimpxybthtbyxpminiwwuckcdfyrcjgxkvsibhaodwppwdoahbisvkddquufokwjdzzvckybmwxmbjbmxwmbykcvzzdjwkofuuqsbmmfbxaynonlxkzuhhlqwwqlhhuzkxlnonyaxbfmmbszfrrfzlztimifvywnjwidebfegjixugqgeuuegqguxijgefbediwjnwyvfimitrojxfbglwxxhmlctqkrorkqtclmhxxwlgbfxjoxkaccdajnuegrytenttnetyrgeunjadccahsammbxbbxbmmashfdznohifexneahpimkkmiphaenxejoinhnnzpyuegclzerejejerezlcgeuypznnhniojiwgrixqfvmzdjjdzmvfqxirgwxcnbubnccnxxncskpkbqbkyqjsclpskkreasklbboobblksaerkksplcsjkklqqjwjqqlkkpjuwslpeomxxmoeplswtonqgncvfazkoguviuiiuivugokzafvcngqikluwzutwkrlqmoegypztwhpdwrwdphwtzpygeomqlrkwtuzwulktelwojlfoxphulqugduxkkkkxudguqluhpxophkdxnlifuvgcbbcgvufilnjrokcphagutlciauhujdcqqztushsutzqqcdjuhuaicltugalusowprahtdddlgafxssevondrvxvrdnovessxfagldddtharpwocnpensowmbbdctsnbgcgioarfpwwpfraoigcgbnstcdbbmwosegscreyeedzkuoacfjpsekkespjfcaoukzdeeyercsgupmxvidfqwqmpkfkpmqwqfdivxmlmsekutsejvppvjestukesnfmrgcttcgrmfapnwvjebieeweeibejvwnvk", 4)) // 44
// console.log(maxPalindromes('abaccdbbd', 3)) // 2
// console.log(maxPalindromes('wctqaietbwbwbtelubvbbvbulohknbsuylyusbqdxcelecxmomcozocmojusycwcys', 7)) // 6
// console.log(maxPalindromes('sjbxiufnaanqkwsqswkqrcznzcddhtuhtthuttjfuufjtcfywgecegwyhhnnhtozczirynhhnyrire', 3)) // 10