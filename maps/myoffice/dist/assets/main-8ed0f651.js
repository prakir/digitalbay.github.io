WA.onInit().then(()=>{const e="ZoneHouse1",r=["TileSloy","OnMebel"],n=()=>{r.forEach(o=>{WA.room.hideLayer(o)})},s=()=>{r.forEach(o=>{WA.room.showLayer(o)})};WA.room.area.onEnter(e).subscribe(n),WA.room.area.onLeave(e).subscribe(s)});
//# sourceMappingURL=main-8ed0f651.js.map
