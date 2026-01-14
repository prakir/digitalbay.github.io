/// <reference types="@workadventure/iframe-api-typings" />

// Никаких import'ов, чтобы не было проблем с бандлингом

WA.onInit().then(() => {
    const AREA_NAME = "ZoneHouse1";        // объект-зона (Class=area, Name=ZoneHouse1)

    // Слои, которые нужно скрывать при входе в здание
    // TileSloy - содержит каркас здания (крышу)
    // OnMebel - содержит элементы над персонажем
    const ROOF_LAYERS = ["TileSloy", "OnMebel"];

    const hideRoof = () => {
        ROOF_LAYERS.forEach(layer => {
            WA.room.hideLayer(layer);
        });
    };

    const showRoof = () => {
        ROOF_LAYERS.forEach(layer => {
            WA.room.showLayer(layer);
        });
    };

    // При входе/выходе из зоны ZoneHouse1
    WA.room.area.onEnter(AREA_NAME).subscribe(hideRoof);
    WA.room.area.onLeave(AREA_NAME).subscribe(showRoof);
});

export {};
