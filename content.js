setInterval(function () {
    $("a").each(function (idx, ele) {
        if ($(ele).attr("data-qa") === "message_sender_name") {
            let currentName = $(ele).text()
            let updatedName = cleanNames(currentName)
            $(ele).text(updatedName)
        }
    })
}, 1000)

setInterval(function () {
    $(".p-channel_sidebar__name").each(function (idx, ele) {
        let currentName = $(ele).text()
        let updatedName = cleanNames(currentName)
        $(ele).text(updatedName)
    })
}, 1000)

function cleanNames(name) {
    let parts = name.split(".")
    if (parts.length === 1) {
        parts = name.split("-")
    }
    let ans = []
    parts.forEach(element => {
        ans.push(element.charAt(0).toUpperCase() + element.slice(1))
    });
    return ans.join(" ")
}