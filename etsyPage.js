var etsyCommand = {
    Categories: function (data) {
        this
            .click(data.cS)
            .verify.containsText('@catName', data.ReH)
        return this
    },
    Drops: function (input) {
        this
            .moveToElement(input.cSa, 10, 10)
            .waitForElementVisible(input.dD)
        if (input.sDa === 'empty') {
            this
                .click(input.dD)
                .verify.containsText('div[class="float-left"]', input.dDr)
        }
        else {
            this
                .click(input.dD)
                .click(input.sDd)
                .verify.containsText('div[class="float-left"]', input.dDr)
        }
        return this
    }
}

module.exports = {
    url: 'https://www.etsy.com/',
    commands: [etsyCommand],
    elements: {
        searchBar: 'input[name="search_query"]',
        searchBtn: 'button[class="wt-input-btn-group__btn"]',
        ja: 'span[id="catnav-primary-link-10855"]',
        cls: 'span[id="catnav-primary-link-10923"]',
        hl: 'span[id="catnav-primary-link-891"]',
        wp: 'span[id="catnav-primary-link-10983"]',
        te: 'span[id="catnav-primary-link-11049"]',
        ac: 'span[id="catnav-primary-link-66"]',
        crs: 'span[id="catnav-primary-link-562"]',
        catName: 'div[class="float-left"]',
        subCatName: 'div[class="pt-xs-4 clearfix pl-xs-1 pl-md-4 pl-lg-6 pr-xs-1 pr-md-4 pr-lg-6"]',
        searchR: 'div[class="wt-grid wt-grid--block wt-pl-xs-0"]',
        QA: 'h3[class="text-gray text-truncate mb-xs-0 text-body "]',
        Size: '#inventory-variation-select-0',
        sortBtn: 'button[class="wt-menu__trigger wt-btn wt-btn--small wt-btn--transparent"]',
        add: 'button[class="wt-btn wt-btn--filled wt-width-full"]',
        cart: 'a[href="https://www.etsy.com/cart?ref=hdr-cart"]',
        acc: 'span[id="side-nav-category-link-10856"]',
        allAcc: 'a[id="catnav-l3-10856"]',
        bags: 'span[id="side-nav-category-link-10865"]',
        allBags: 'a[id="catnav-l3-10865"]',
        neck: 'span[id="side-nav-category-link-10873"]',
        allNeck: 'a[id="catnav-l3-10873"]',
        ring: 'span[id="side-nav-category-link-10883"]',
        allRing: 'a[id="catnav-l3-10883"]',
        ear: 'span[id="side-nav-category-link-10896"]',
        allEar: 'a[id="catnav-l3-10896"]',
        brace: 'span[id="side-nav-category-link-10905"]',
        allBrace: 'a[id="catnav-l3-10905"]',
        body: 'span[id="side-nav-category-link-10912"]',
        allBody: 'a[id="catnav-l3-10912"]',
    }
}

