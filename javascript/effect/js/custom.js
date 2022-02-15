        //highlight
        const highlight = function(){
            hljs.highlightAll()
        }

        //modal
        const modal = function(){
            //버튼을 클릭하면 modal창을 보이게 해주세요 (show 추가)
            document.querySelector(".source-btn").addEventListener("click", () => {
                document.querySelector("#modal").classList.add("show");
                document.querySelector("#modal").classList.remove("hide");
            });
            document.querySelector(".modal-close").addEventListener("click", () => {
                document.querySelector("#modal").classList.remove("show");
                document.querySelector("#modal").classList.add("hide");
            })
            document.querySelector(".close").addEventListener("click", () => {
                document.querySelector("#modal").classList.remove("show");
                document.querySelector("#modal").classList.add("hide");
            })
        }

        //tab 메뉴
        const tabMenu = function(){
            const tabBtn = document.querySelectorAll(".view-title > ul > li");
            const tabCont = document.querySelectorAll(".view-cont > div");

            //각각의 버튼을 클릭하면 경고창을 띄어주세요~
            tabBtn.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    //내가 클릭하지 않은건 actvie 삭제
                    tabBtn.forEach(el => {
                        el.classList.remove("active");
                    });
                    //내가 클릭한 건 active 추가
                    btn.classList.add("active");

                    //모든 컨텐츠 박스 안보이게 함
                    tabCont.forEach(e => {
                        e.style.display = "none";
                    })

                ///내가 클릭한 컨텐츠 박스 보이게 함
                    tabCont[index].style.display= "block";
                })
            })
        }

        // const modal = function(){
        //     $(".source-btn").click(() => {
        //         $("#modal").addClass("show");
        //     });
        //     $(".modal-close").click(() => {
        //         $("#modal").removeClass("show");
        //     })
        // }
        // modal();