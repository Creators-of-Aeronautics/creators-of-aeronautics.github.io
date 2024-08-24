const tags = [
    "create aeronautics",
    "create",
    "create mod",
    "minecraft",
    "create simulated",
    "simulation",
    "mod",
    "physics",
    "liftoff",
    "create liftoff",
    "create high seas",
    "high seas",
    "tracky",
    "create offroad",
    "offroad",
    "bunger",
    "bunger troll",
    "bungertroll",
    "plunger",
];

export default defineNitroPlugin((app) => {
    app.hooks.hook("render:html", (html, { event }) => {
        if (event.path.endsWith("download")) {
            html.head.push(
                `<meta name="title" content="create aromantic istnall download:!!1!">`,
            );
            html.head.push(
                `<meta name="description" content="free!!! no virus!!!!!!" />`,
            );
        } else {
            html.head.push(`<meta name="title" content="Create: Simulated">`);
            html.head.push(
                `<meta name="description" content="The home page of the Create: Simulated project. Expanding the Minecraft Create mod with interactive physics-based contraptions." />`,
            );
        }

        html.head.push(`<meta name="keywords" content="${tags.join(", ")}" />`);
        html.head.push(`<meta name="robots" content="index, follow" />`);
        html.head.push(
            `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`,
        );
        html.head.push(`<meta name="language" content="English" />`);
        html.head.push(
            `<link href="${useRuntimeConfig().app.baseURL}favicon.ico" rel="icon" type="image/x-icon" />`,
        );
    });
});
