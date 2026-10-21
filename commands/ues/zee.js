import { SlashCommandBuilder } from "discord.js";
import zeeInfo from "../../functions/zee.js";
export default {
    data: new SlashCommandBuilder()
        .setName("zee")
        .setDescription("Zee  info,,, I think"),
    async execute(interaction) {
        await interaction.deferReply();
        await zeeInfo(interaction);
    }
};
//# sourceMappingURL=zee.js.map