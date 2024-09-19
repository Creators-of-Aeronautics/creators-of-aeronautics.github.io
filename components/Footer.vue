<template>
    <!-- Eternal Link Icons (from https://intergrav.github.io/devins-badges-docs/) -->
    <div class="externalIcons">
        <a href="https://discord.com/invite/createaeronautics">
            <img
                class="icon"
                src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/social/discord-plural_64h.png"
            />
        </a>

        <a href="https://github.com/Creators-of-Aeronautics/">
            <img
                class="icon"
                src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/social/github-plural_64h.png"
            />
        </a>

        <!-- Why is this here? I found this in the original files... -->
        <!-- <a href="https://modrinth.com/mod/fabric-api">
                <img class="icon"
                    src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/available/modrinth_64h.png">
            </a> -->
        <!-- <a href="https://www.curseforge.com/minecraft/mc-mods/fabric-api">
                <img class="icon"
                    src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/available/curseforge_64h.png">
            </a> -->

        <a href="https://www.youtube.com/@createaeronautics1997">
            <img
                class="icon"
                src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/social/youtube-plural_64h.png"
            />
        </a>
        <a href="https://twitter.com/C_Aeronautics">
            <img
                class="icon"
                src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/social/twitter-plural_64h.png"
            />
        </a>
    </div>
</template>

<style lang="scss" scoped>
.externalIcons {
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 0 1% 1% 0;
    z-index: 100;

    .icon {
        height: 3em;
        transition: 100ms;

        &:hover {
            size: 100px;
            padding-bottom: 10px;
            transition: 100ms;
        }
    }
}
</style>
