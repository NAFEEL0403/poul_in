function calculate() {
    let req_legs = Number(document.getElementById("legs").value);
    let req_wings = Number(document.getElementById("wings").value);
    let req_flesh = Number(document.getElementById("flesh").value);

    let weight_leg = 0.25;
    let weight_wing = 0.25;
    let weight_flesh = 1;

    let legs_per_chicken = 2;
    let wings_per_chicken = 2;
    let flesh_per_chicken = 1;

    let order_weight = (req_legs * weight_leg) + (req_wings * weight_wing) + (req_flesh * weight_flesh);

    let chickens_needed = Math.ceil(
        Math.max(
            req_legs / legs_per_chicken,
            req_wings / wings_per_chicken,
            req_flesh / flesh_per_chicken
        )
    );

    let remain_legs = (chickens_needed * legs_per_chicken) - req_legs;
    let remain_wings = (chickens_needed * wings_per_chicken) - req_wings;
    let remain_flesh = (chickens_needed * flesh_per_chicken) - req_flesh;

    let remain_weight = (remain_legs * weight_leg) +
                        (remain_wings * weight_wing) +
                        (remain_flesh * weight_flesh);

    document.getElementById("output").innerHTML =
        "Order Weight: " + order_weight.toFixed(2) + " kg<br>" +
        "Chickens Needed: " + chickens_needed + "<br>" +
        "Remaining Parts: Legs " + remain_legs +
        ", Wings " + remain_wings +
        ", Flesh " + remain_flesh + "<br>" +
        "Remaining Weight: " + remain_weight.toFixed(2) + " kg";
}
