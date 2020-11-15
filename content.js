// Main Conversation Window Fixes
setInterval(function () {
    $("a").each(function (idx, element) {
        if ($(element).attr("data-qa") === "message_sender_name") {
            let currentName = $(element).text()
            let updatedName = cleanName(currentName)
            $(element).text(updatedName)
        }
    })
}, 1000)

// Sidebar Fixes
setInterval(function () {
    $(".p-channel_sidebar__name").each(function (idx, element) {
        let currentName = $(element).text()
        let updatedName = cleanName(currentName)
        $(element).text(updatedName)
    })
}, 1000)

function cleanName(name) {
    let words = name.split(".")
    if (words.length === 1) {
        words = name.split("-") // For Channel Names
    }
    let betterName = []
    words.forEach(element => {
        betterName.push(element.charAt(0).toUpperCase() + element.slice(1))
    });
    return betterName.join(" ")
}