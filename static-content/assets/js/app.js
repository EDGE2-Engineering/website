function renderGallery(sourceDir, imagesList) {
    for (const idx in imagesList) {
        if (idx === 8) {
            break;
        }
        const image = `${sourceDir}/${imagesList[idx]}`;
        const thumbnail = `<div class="col-12 col-md-6 col-lg-3 item gallery-image">
                                    <div class="item-wrapper mb-3" data-toggle="modal" data-bs-toggle="modal"
                                         data-target="#tPqUj7W7Px-modal" data-bs-target="#tPqUj7W7Px-modal">
                                        <img class="w-100" src="${image}" alt="Mobirise Website Builder"
                                             data-slide-to="${idx}" data-bs-slide-to="${idx}" data-target="#lb-tPqUj7W7Px"
                                             data-bs-target="#lb-tPqUj7W7Px">
                                        <div class="icon-wrapper">
                                            <span class="mobi-mbri mobi-mbri-search mbr-iconfont mbr-iconfont-btn"></span>
                                        </div>

                                    </div>
                                </div>`;
        let active = '';
        let activeClass = '';
        let ariaCurrent = ''
        if (parseInt(idx) === 0) {
            active = 'active';
            ariaCurrent = 'aria-current="true"';
            activeClass = `class='${active.trim()}'`;
        }
        const carousel = `<div class="carousel-item ${active}" style="top: 10px;">
                                    <img class="d-block w-100" src="${image}"
                                         alt="Mobirise Website Builder">
                                </div>`;
        const carouselIndicator = `<li data-slide-to="${idx}" data-bs-slide-to="${idx}" data-target="#lb-tPqUj7W7Px"
                                            data-bs-target="#lb-tPqUj7W7Px" ${activeClass}>
                                       </li>`
        $('.gallery-thumbnails').append(thumbnail);
        $('.gallery-carousel').append(carousel);
        $('.carousel-indicators').append(carouselIndicator)
    }
}