Scene system:

    main scenes will be stored in an array scenes = []
        each index will be an object containing properties "text", "item", "character" etc
        when a scene is loaded, the button options will populate based on those properties, and "text" will be displayed in the main window.
        current scene will be stored in variable currentScene = scenes[#]

    scenes = [
        scene1: {
            text: "You wake up in your bed on your birthday. Your phone is on the nightstand waiting to be swiped on, and your cat Snowflake is sitting on your face, purring loudly.",
            item: phone,
            character: snowflake,
            movement: door,
        },
        scene2: {
            text: You exit the bedroom and must decide how to start your day
        }
    ]


Inventory:

    Inventory will be an array inventory = []
    items will be pushed to it when clicked, and removed from it if used or traded
    Use bracket notation to call items by name instead of index number
    Different options will be available in a scene if the inventory contains an item that can be used in that scene.