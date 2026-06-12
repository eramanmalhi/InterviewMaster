const categoryMenu =
document.getElementById("categoryMenu");

const questionsContainer =
document.getElementById(
    "questionsContainer"
);

const searchBox =
document.getElementById(
    "searchBox"
);

function generateId(text){

    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g,"-");
}

/* SIDEBAR */

function buildSidebar(){

    categoryMenu.innerHTML = "";

    Object.keys(data)
    .forEach(category => {

        const count =
        data[category].length;

        const li =
        document.createElement("li");

        li.innerHTML =
        `${category}
        <span>
        (${count})
        </span>`;

        li.dataset.target =
        generateId(category);

        li.onclick = () => {

            document
            .getElementById(
                generateId(category)
            )
            .scrollIntoView({
                behavior:"smooth"
            });
        };

        categoryMenu
        .appendChild(li);

    });

}

/* QUESTIONS */

function renderQuestions(){

    questionsContainer.innerHTML = "";

    Object.keys(data)
    .forEach(category => {

        const section =
        document.createElement(
            "section"
        );

        section.className =
        "category";

        section.id =
        generateId(category);

        let html = `

        <h2 class="category-title">

            ${category}

            <span style="
            font-size:16px;
            color:#777;
            font-weight:normal;
            ">

            (${data[category].length})

            </span>

        </h2>

        `;

        data[category]
        .forEach((q,index)=>{

            html += `

            <div class="question">

                <div class="question-title">

                    Q${index+1}.
                    ${q.question}

                </div>

                <div class="answer">

                    ${q.answer}

                </div>

            </div>

            `;
        });

        section.innerHTML = html;

        questionsContainer
        .appendChild(section);

    });

    bindAccordion();
    updateStats();
}

/* ACCORDION */

function bindAccordion(){

    document
    .querySelectorAll(
        ".question-title"
    )
    .forEach(item=>{

        item.onclick = ()=>{

            item
            .parentElement
            .classList
            .toggle("active");
        };

    });

}

/* SEARCH */

function initializeSearch(){

    searchBox.addEventListener(
        "input",
        function(){

            const keyword =
            this.value
            .toLowerCase();

            document
            .querySelectorAll(
                ".question"
            )
            .forEach(q=>{

                const text =
                q.innerText
                .toLowerCase();

                q.style.display =
                text.includes(keyword)
                ? "block"
                : "none";

            });

        }
    );
}

/* STATS */

function updateStats(){

    let total = 0;

    Object.values(data)
    .forEach(arr => {

        total += arr.length;

    });

    document
    .getElementById(
        "questionCount"
    )
    .innerText = total + "+";

    document
    .getElementById(
        "topicCount"
    )
    .innerText =
    Object.keys(data).length;
}

/* START */

window.addEventListener(
    "load",
    ()=>{

        buildSidebar();

        renderQuestions();

        initializeSearch();

    }
);