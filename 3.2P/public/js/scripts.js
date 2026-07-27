const addCards = (items) => {
    items.forEach((item) => {
        const itemToAppend = `
            <div class="col s12 m6 l4 center-align">
                <div class="card medium hoverable">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img
                            class="activator"
                            src="${item.image}"
                            alt="${item.title}"
                        >
                    </div>

                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">
                            ${item.title}
                            <i class="material-icons right">more_vert</i>
                        </span>

                        <p>
                            <a class="activator" href="#!">
                                ${item.link}
                            </a>
                        </p>
                    </div>

                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">
                            ${item.title}
                            <i class="material-icons right">close</i>
                        </span>

                        <p class="card-text">
                            ${item.description}
                        </p>
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
        } else {
            M.toast({
                html: "The recipes could not be loaded."
            });
        }
    }).fail(() => {
        M.toast({
            html: "Unable to connect to the recipe service."
        });
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
    $(".modal").modal();

    $("#formSubmit").click(() => {
        submitForm();
    });

    getRecipes();
});