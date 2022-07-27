export default function formatHtml(string) {
    let s = string.replaceAll("\n", "");
    let str = s.split("<a");
    let p1 = "";
    let a = "";
    let p2 = "";
    if (str.length == 3) {
        p1 = str[0];
        p2 = str[2].replaceAll(">", "");
        let href = string.substr(string.indexOf("href=") + 5, string.indexOf(">") - string.indexOf("href=") - 5);
        let aName = str[1].substr(str[1].indexOf(">")+1)
        a = <a href={href}>{aName}</a>
    }
    if (str.length == 2 && s.indexOf("<a>") > 0) {
        let href = string.substr(string.indexOf("href=") + 5, string.indexOf(">") - string.indexOf("href=") - 5);
        let aName = str[0].substr(str[0].indexOf(">")+1)
        a = <a href={href}>{aName}</a>
    }
    if (str.length == 1 && s.indexOf("<a>") < 0) {
        p1 = s;
    }

    return <span>
        {p1}
        {a}
        {p2}
    </span>
}
