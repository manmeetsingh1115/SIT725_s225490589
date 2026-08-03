const addCards = (items) => {
    items.forEach((item) => {
        const itemToAppend = `
            <div class="col s12 m6 l4 center-align">
                <div class="card medium hoverable">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img
                            class="activator"
                            src="${item.imagePath}"
                            alt="${item.name}"
                        >
                    </div>

                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">
                            ${item.name}
                            <i class="material-icons right">more_vert</i>
                        </span>

                        <p>${item.cuisine} cuisine</p>
                        <p>Cooking time: ${item.cookingTime}</p>
                    </div>

                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">
                            ${item.name}
                            <i class="material-icons right">close</i>
                        </span>

                        <p><strong>Cuisine:</strong> ${item.cuisine}</p>
                        <p><strong>Cooking time:</strong> ${item.cookingTime}</p>
                        <p>${item.summary}</p>
                    </div>
                </div>
            </div>
        `;

        $("#card-section").append(itemToAppend);
    });
};

const getRecipes = () => {
    $.get("/api/recipes", (response) => {
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    });
};

const submitForm = () => {
    const formData = {
        firstName: $("#first_name").val(),
        lastName: $("#last_name").val(),
        email: $("#email").val(),
        favouriteRecipe: $("#favourite_recipe").val()
    };

    console.log("Form Data Submitted:", formData);

    M.toast({
        html: "Thank you for sharing your favourite recipe!"
    });

    const modalElement = document.getElementById("modal1");
    const modalInstance = M.Modal.getInstance(modalElement);
    modalInstance.close();

    $("form")[0].reset();
};

$(document).ready(function () {
    $(".materialboxed").materialbox();

    $("#formSubmit").click(() => {
        submitForm();
    });

    getRecipes();

    $(".modal").modal();
});