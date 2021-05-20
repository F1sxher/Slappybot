module.exports = function(interaction){
    let authorName = `${interaction.member.user.username}#${interaction.member.user.discriminator}`
    let authorAvatar = `https://cdn.discordapp.com/avatars/${interaction.member.user.id}/${interaction.member.user.avatar}.png`
    return [authorName, authorAvatar]
}