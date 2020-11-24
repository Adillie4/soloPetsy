
var myData = require('../testAssets/etsyAsset')
var myData2 = require('../testAssets/etsyAsset2')
// var icons = ['a[href="https://www.etsy.com/search?q=holiday&mosv=sese&moci=959118785886&mosi=959119085756&ref=hp_bubbles_nov_2020&anchor_listing_id=654782687&is_discounted=true"]', 
// 'a[href="https://www.etsy.com/search?q=name+puzzles&mosv=sese&moci=959118785886&mosi=981575185253&ref=hp_bubbles_nov_2020&anchor_listing_id=613627327&is_discounted=true"]',
// 'a[href="https://www.etsy.com/search?q=Christmas+ornaments&mosv=sese&moci=968090972999&mosi=986952416792&ref=hp_bubbles_nov_2020&anchor_listing_id=548004514"]',
// 'a[href="https://www.etsy.com/search/jewelry?q=necklaces&mosv=sese&moci=968090972999&mosi=1009112850715&ref=hp_bubbles_nov_2020&anchor_listing_id=695086314"]',
// 'a[href="https://www.etsy.com/search?q=christmas+stockings&mosv=sese&moci=968090972999&mosi=986953177912&ref=hp_bubbles_nov_2020&anchor_listing_id=569858301"]',
// 'a[href="https://www.etsy.com/search?q=Face+masks&mosv=sese&moci=968090972999&mosi=968091300233&ref=hp_bubbles_nov_2020&anchor_listing_id=873788016"]']
var EPage = {}
module.exports = {
    beforeEach: browser => {
        EPage = browser.page.etsyPage()
        EPage.navigate()
    },
    after: browser => {
        EPage.end()
    },
    //Testing the Category Tabs
    'Categories Tabs': browser => {
        myData.forEach(picks => {
            EPage
                .Categories(picks)
        })
    },
    //Testing Dropdowns
    'Dropdowns': browser => {
        myData2.forEach(section => {
            EPage
                .Drops(section)
            //  Will get error messages but test functions as expected
            // IGNORE (14) ERROR MESSAGES
        })
    },
    // Testing Search and Add to Cart and Remove from Cart
    'Search & Add': browser => {
        EPage
            .setValue('@searchBar', 'QA Tester VS Developer Feature Vs Bug')
            .click('@searchBtn')
            .verify.containsText('@searchR', 'QA')
            .click('@QA')
            .api.windowHandles(result => {
                browser.switchWindow(result.value[1])
            }),
            EPage
                .verify.containsText('h1[data-buy-box-listing-title]','QA')
                .click('#inventory-variation-select-0')
                .moveToElement('option[value="1097034597"]', 10, 10)
                .click('option[value="1097034597"]')
                .pause(200)
                .click('@add')
                .click('a[href="https://www.etsy.com/cart?ref=hdr-cart"]')
                .verify.containsText('#checkout', 'Tester')
                .click('button[class="wt-btn wt-btn--transparent wt-btn--small "]')
                .pause(250)
                .verify.containsText('div[class="wt-text-center-xs"]', 'Your cart is empty')
    },
    //Work on Later
    //Testing the Filter Options within a Catagory 
    // 'Filters': browser => {
    //     EPage
    //     .click('@cls')
    //     .waitForElementVisible('div[role="region"]')
    //     .moveToElement('input[name="free_shipping"]',10,10)
    //     .pause(250)
    //     .click('input[name="free_shipping"]')
    //     .pause(250)
    //     .verify.containsText('ul[class="wt-action-group wt-list-inline "]', 'FREE shipping')
    // },
    //Work on Later
    //Testing the Icons
    // 'Icons': browser => {
    //     for (let i = 1; i < icons.length; i++) {
    //         EPage
    //         .useXpath()
    //         .click('//div[@class="shopping-window wt-grid__item-xs-4 wt-grid__item-lg-2 wt-text-center-xs wt-break-word wt-pb-xs-3 wt-pl-md-3 wt-pr-md-3"][{$i}]')
    //         .waitForElementVisible('//div[@class="col-xs-12 pl-xs-1 pl-md-3"]')
    //     }

    // }
}
