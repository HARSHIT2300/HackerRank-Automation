const puppeteer = require("puppeteer");
const AnswerObj = require("./solution.js");
console.log("Before");
const BrowserOpen = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    args : ["--start-maximized"]
});

let page;

BrowserOpen.then(function(browser){
    const pageArrPromise = browser.pages();
    return pageArrPromise;
}).then(function(pageArr){
    page = pageArr[0];
    const gotoPagePromise = page.goto("https://www.hackerrank.com/auth/login");
    return gotoPagePromise;
}).then(function(){
    const WaitForElemPromise = page.waitForSelector("#input-1",{visible : true});
    return WaitForElemPromise;
}).then(function(){
    const EnterUsernamePromise = page.type("#input-1","yadavharshit231@gmail.com",{delay : 50});
    return EnterUsernamePromise;
}).then(function(){
    const EnterPasswordPromise = page.type("#input-2","Belkin12!",{delay : 50});
    return EnterPasswordPromise;
}).then(function(){
    const ClickPromise = page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled",{delay : 50});
    return ClickPromise;
}).then(function(){
    const WaitForElemPromise = page.waitForSelector('a[data-attr1="algorithms"]',{visible : true});
    return WaitForElemPromise;
}).then(function(){
    const ClickPromise = page.click('a[data-attr1="algorithms"]',{delay : 10});
    return ClickPromise;
}).then(function(){
    const WaitForElemPromise = page.waitForSelector('input[value="warmup"]',{visible : true});
    return WaitForElemPromise;
}).then(function(){
    const ClickPromise = page.click('input[value="warmup"]',{delay : 10});
    return ClickPromise;
}).then(function(){
    const waitFor3Sec = page.waitForSelector('.content--list_body');
    return waitFor3Sec;
}).then(function(){
    const ProblemsArrPromise = page.$$('.content--list_body',{delay : 10});
    return ProblemsArrPromise;
}).then(function(ProblemsArr){
    console.log(ProblemsArr.length);
    const ProbisClicked = ProblemsArr[0].click();
    return ProbisClicked;
    // return ProblemsArrPromise;
}).then(function(){
    const WaitForElemPromise = page.waitFor(3000);
    return WaitForElemPromise;
}).then(function(){
    const WaitForElemPromise = page.waitForSelector('input[type="checkbox"]',{visible : true});
    return WaitForElemPromise;
}).then(function(){
    const ClickPromise = page.click('input[type="checkbox"]',{delay : 10});
    return ClickPromise;
}).then(function(){
    const WaitForElemPromise = page.waitForSelector('.input.text-area.custominput.auto-width',{visible : true});
    return WaitForElemPromise;
}).then(function(){
    const WriteCodePromise = page.type('.input.text-area.custominput.auto-width',AnswerObj.answers[0],{delay : 20});
    return WriteCodePromise;
}).then(function(){
    const PressCtrlPromise = page.keyboard.down('Control',);
    return PressCtrlPromise;
}).then(function(){
    const PressAPromise = page.keyboard.press('A',{delay : 100});
    return PressAPromise;
}).then(function(){
    const PressXPromise = page.keyboard.press('X',{delay : 100});
    return PressXPromise;
}).then(function(){
    const ReleaseCtrlPromise = page.keyboard.up('Control');
    return ReleaseCtrlPromise;
}).then(function(){
    const SelectorEditorSectionPromise = page.click('.monaco-editor.no-user-select.vs',{delay : 10});
    return SelectorEditorSectionPromise;
}).then(function(){
    const PressCtrlPromise = page.keyboard.down('Control');
    return PressCtrlPromise;
}).then(function(){
    const PressAPromise = page.keyboard.press('A',{delay : 100});
    return PressAPromise;
}).then(function(){
    const PressVPromise = page.keyboard.press('V',{delay : 100});
    return PressVPromise;
}).then(function(){
    const ReleaseCtrlPromise = page.keyboard.up('Control');
    return ReleaseCtrlPromise;
}).then(function(){
    const PressSubmitPromise = page.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
    return PressSubmitPromise;
}).catch(function(error){
    console.log(error);
})

console.log("After");