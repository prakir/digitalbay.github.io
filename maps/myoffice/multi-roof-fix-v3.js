WA.onInit().then(() => {
    const RULES = [
        { area: "ZoneHouse1", layers: ["PolytechHide"] },
        { area: "ZoneGreenhouse1", layers: ["GreenhouseHide"] },
        { area: "ZoneBuilding3_1", layers: ["Building3Hide"] },
    ];

    const show = (layers) => layers.forEach((layer) => WA.room.showLayer(layer));
    const hide = (layers) => layers.forEach((layer) => WA.room.hideLayer(layer));

    // Force visible state twice to beat stale startup ordering/caching.
    RULES.forEach((r) => show(r.layers));
    setTimeout(() => RULES.forEach((r) => show(r.layers)), 300);

    RULES.forEach((r) => {
        WA.room.area.onEnter(r.area).subscribe(() => hide(r.layers));
        WA.room.area.onLeave(r.area).subscribe(() => show(r.layers));
    });
});
