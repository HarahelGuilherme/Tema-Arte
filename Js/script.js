// Array com as URLs das imagens
        const images = [
            "https://s1.static.brasilescola.uol.com.br/be/2024/08/arte-moderna.jpg",
            "https://s3.static.brasilescola.uol.com.br/be/2024/08/mona-lisa.jpg",
            "https://static.todamateria.com.br/upload/ab/st/abstracionismo-0-cke.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhQ31GKG_QtT47WtBWbtUCZG3NCt2Bk6Epw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHoeWzkjC8C6AlzI441iKYeaLHJYmLWYR3A&s",
            "https://cdn.prod.website-files.com/60ff690cd7b0537edb99a29a/61f4494b36535cfd07b98bd7_Conceito-de-arte.webp",
            "https://www.colegiodosjesuitas.com.br/wp-content/uploads/2021/08/Artigo_Site_Dia-das-Artes.jpg",
            "https://static.significados.com.br/foto/tipos-de-arte-og.jpg",
            "https://static.todamateria.com.br/upload/ti/po/tipos-de-arte-og.jpg"
        ];

        // Função para trocar a imagem
        function changeImage() {
            // Escolhe uma imagem aleatória do array
            const randomIndex = Math.floor(Math.random() * images.length);
            const imgElement = document.getElementById("image");
            imgElement.src = images[randomIndex];
        }

        // Adiciona o evento de clique no documento
        document.addEventListener("click", changeImage);