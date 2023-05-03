
async function pull() {
    item = document.getElementById("item").value
    quality = document.getElementById("qualities").value
    const rawData = await fetch(`https://east.albion-online-data.com/api/v2/stats/prices/${item}?locations=Caerleon,Bridgewatch,FortSterling,Lymhurst,Martlock,Thetford&qualities=${quality}`) 
    const data = await rawData.json()
    console.log(data);
    board(data)

}
function board(data) {
    document.getElementById("SMIN_B").innerHTML = data[0].sell_price_min
    document.getElementById("SMIN_C").innerHTML = data[1].sell_price_min
    document.getElementById("SMIN_F").innerHTML = data[2].sell_price_min
    document.getElementById("SMIN_L").innerHTML = data[3].sell_price_min
    document.getElementById("SMIN_M").innerHTML = data[4].sell_price_min
    document.getElementById("SMIN_T").innerHTML = data[5].sell_price_min

    document.getElementById("SMAX_B").innerHTML = data[0].sell_price_max
    document.getElementById("SMAX_C").innerHTML = data[1].sell_price_max
    document.getElementById("SMAX_F").innerHTML = data[2].sell_price_max
    document.getElementById("SMAX_L").innerHTML = data[3].sell_price_max
    document.getElementById("SMAX_M").innerHTML = data[4].sell_price_max
    document.getElementById("SMAX_T").innerHTML = data[5].sell_price_max 

    document.getElementById("BMIN_B").innerHTML = data[0].buy_price_min
    document.getElementById("BMIN_C").innerHTML = data[1].buy_price_min
    document.getElementById("BMIN_F").innerHTML = data[2].buy_price_min
    document.getElementById("BMIN_L").innerHTML = data[3].buy_price_min
    document.getElementById("BMIN_M").innerHTML = data[4].buy_price_min
    document.getElementById("BMIN_T").innerHTML = data[5].buy_price_min

    document.getElementById("BMAX_B").innerHTML = data[0].buy_price_max
    document.getElementById("BMAX_C").innerHTML = data[1].buy_price_max
    document.getElementById("BMAX_F").innerHTML = data[2].buy_price_max
    document.getElementById("BMAX_L").innerHTML = data[3].buy_price_max
    document.getElementById("BMAX_M").innerHTML = data[4].buy_price_max
    document.getElementById("BMAX_T").innerHTML = data[5].buy_price_max
}
