module.exports = function(interaction: any){
    let authorTag: string = `${interaction.member.user.username}#${interaction.member.user.discriminator}`
    let authorAvatar = `https://cdn.discordapp.com/avatars/${interaction.member.user.id}/${interaction.member.user.avatar}.png`
    return {"tag": authorTag, "avatar_url": authorAvatar}
}