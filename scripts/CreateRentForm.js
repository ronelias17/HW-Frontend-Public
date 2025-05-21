function CreateRentForm(movie)
{
    const form = document.createElement("form");
    form.className = "rent-form";

    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Movie Renting Form";

    const card = CreateCard(movie);
    
    const priceParagraph = document.createElement("p");
    priceParagraph.innerHTML = `Price per day: <strong>$${movie.priceToRent}</strong>`;

    const label = document.createElement("label");
    label.setAttribute("for", "rentDate");
    label.textContent = "Rent Until Date: ";

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "rentDate";
    dateInput.name = "rentDate";
    dateInput.required = true;

    const totalPrice = document.createElement("p");
    totalPrice.id = "totalPriceDisplay";
    totalPrice.textContent = "Total Price: $0 (0 days)";

    const buttonDiv = document.createElement("div");
    buttonDiv.id = "buttonDiv";

    const confirmBtn = document.createElement("button");
    confirmBtn.type = "submit";
    confirmBtn.id = `confirmBtn`;
    confirmBtn.textContent = "Confirm";

    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancelRent";
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";

    buttonDiv.append(confirmBtn, cancelBtn);
    form.append(title, card, priceParagraph, label, dateInput, totalPrice, buttonDiv);
    return form;
}