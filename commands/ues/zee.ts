import {ChatInputCommandInteraction, SlashCommandBuilder} from "discord.js";
import {ues} from "../../functions/wikiHelpers.js";
import zeeInfo from "../../functions/zee.js";


export default {
    data: new SlashCommandBuilder()
        .setName("zee")
        .setDescription("Zee  info,,, I think"),

    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.deferReply()

        if (interaction.guildId !== ues.guildId) return interaction.editReply('This command can only be run in the UES server.')
        await zeeInfo(interaction);
    }
}