const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spin')
		.setDescription('Spins for a new Boss!'),
	category: 'fun',
	async execute(interaction) {
    const bossList = [
      "Boss 1: Jeebs",
      "Boss 2: Herasana",
      "Boss 3: Mickmoofin"
    ];

    await interaction.reply({
      embeds: [new EmbedBuilder()
        .setDescription(bossList[Math.floor(Math.random()*bossList.length)])
        .setFooter({text: `Spun by ${interaction.user.username}`})]
    });
	},
};
