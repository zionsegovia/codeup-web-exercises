
    const newData = async () => {
        let response = await fetch(`../data/blog.json`);
        let data = await response.json();
        return data;
    };

    (async () => {
        let getBlog = await newData();
        console.log(getBlog);
        let newContent = document.querySelector("#posts");
        newContent.innerHTML = "";
        getBlog.forEach(item => {
            let newContentData = document.createElement("div");
            newContentData.innerHTML = `
                <div>${item.title}</div>
                <div>${item.content}</div>
                <div>${item.categories}</div>
                <div>${item.date}</div>
            `;
            newContent.appendChild(newContentData);
        });
    })();

