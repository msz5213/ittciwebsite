/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    //https://devhints.io/xpath
    //XPath
    basic_xpath_1: "//input [@name:’password’]",
    basic_xpath_2: "//a [@href: ‘https://www.lambdatest.com/’]",
    basic_xpath_3: "//*[@id:’email_01’]",
    basic_xpath_4: "//input[name:’email’][@placeholder:’Work Email’]",
    //Table
    basic_xpath_5: "//div[@id:'main']/table[1]/tbody/tr[1]/th[1]",
    basic_xpath_6: "//*[@id:'main']/table[1]/tbody",
    //Text
    text:"//button[text():'Signup for Free']",
    text_1:"//button[contains(text(),'Signup')]",
    //Index
    index:"//div[@class: 'col-sm-12 google-sign-form']/input[2]",
    //XPath using AND/OR operator
    xpath_and_1:"//input[@placeholder :'Full Name' and @type : 'text']",
    xpath_and_2:"//input[@type: 'email' and @name: 'email']",
    xpath_or_1:"//input[@placeholder :'Full Name' or @type : 'text']",
    xpath_or_2:"//input[@type: 'email' or @name: 'email']",
    //Contains
    contains : "//*[contains(@id,'username')]",
    contains_1 : "//*[contains(text(),'LogIn')]",
    contains_5 : "//*[contains(string(), 'sign-up-input')]",
    contains_2 : "//*[contains (@placeholder, 'Organization')]",
    contains_3 : "//input[contains (@name, 'organization')]",
    contains_4 : "//*[contains(@class, 'sign-up-input')]",
    //StartWith
    start_with : "//*[starts-with(@id,'user')]",
    start_with_1 : "/input[starts-with(@placeholder, 'Organization)]",
    start_with_2 : "//input[starts-with(@name, 'organization)]",
    //Parent-Child
    paret_child : "//*[@id:'rt-feature']//parent::div",
    //Folling-Siblings
    following_siblings : "//div[@class:'canvas- graph']//a[@href:'/accounting.html'][i[@class:'icon-usd']]/following-sibling::h4",
    //ANCESTOR
    xpath_ancestor_parent :  "//tag[@attribute :'Attribute_Value']//ancestor::parent_node",
    xpath_ancestor_parentNode :  "//label[text():'Full Name']/ancestor::form",
    xpath_ancestor_child :   "//tag[@attribute :'Attribute_Value']//child::child_node",
    xpath_ancestor_childNode :   "//form[@id:'userForm']/child::div[1]//label",
    xpath_descendant_axis :  "//node[attribute:'value of attribute']//descendant::attribute",
    xpath_descendant_path :  "//div[@class: 'custom-control custom-radio custom-control-inline']/descendant::input",
    ancestor :   "//a[contains(text(),'Inside div block 2.')]/ancestor::div//a",
    //Xpath Parent Axis
    xpath_parent_axis :  "//tag[@attribute :'Attribute_Value']//ancestor::parent_node",
    xpath_parent_path :  "//input[@id:'yesRadio']/parent::div",
    //Xpath Following Axis
    xpath_following_axis :   "//node[attribute:'value of attribute']//following::attribute",
    xpath_following_path :   "//input[@id:'userName']/following::textarea",
    //XPath Following sibling Axis
    xpath_following_sibling_axis :   "//node[attribute:'value of attribute']//following-sibling::attribute",
    xpath_following_sibling_path :   "//div[@class:'col-md-3 col-sm-12']/following-sibling::div",
    //XPath Preceding Axis
    xpath_precending_axis :  "//node[attribute:'value of attribute']//preceding::attribute",
    xpath_precending_path :  "//input[@id:'userName']/preceding::label",

    //https://devhints.io/css
    //CSS
    basic_css_1: "#id",
    basic_css_2: "#username",
    basic_css_3: "tagname#id",
    basic_css_4: "input#id",
    basic_css_5: ".class",
    basic_css_6: "tag.class",
    //Next sibling
    css_1:"#username + input",
    css_2:"input[name='username']", //"div[id='vendorId'][comp-id='305']"
    css_3:"input[name='login'][type='submit']",
    //Specific Match
    css_4:"#recordlist li::nth-of-type(4)",
    css_5:"#recordlist *::nth-child(4)",
    //sub-string matches
    css_6:"a[id^='id_prefix_']",
    css_7:"a[id$='_id_sufix']",
    css_8:"a[id*='id_pattern']",
    //Inner Text
    css_9:"div:contains('^lambdatest$')",
    cssContainingText: ('tbody tr','my text'),
    //Match
    css_10: "nput#Passwd[name^=’Pass’]",
    css_11:"input#Passwd[name$=’wd’]",
    css_12:"input#Passwd[name$=’wd’]", //"div#vendorId[comp-id='305']"
    //Attribute
    css_13:"div[data-testid='input-items']",
    css_14:"div[data-testid='input-items'] div input",
    css_15:"div[data-testid='input-items'] button:nth-child(1)",
    css_16: "[ref=‘eCenterContainer’] [row-id=‘VENDR’] [col-id=‘navgrp_ID’]"

}
