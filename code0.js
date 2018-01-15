gdjs.IntroScreenCode = {};


gdjs.IntroScreenCode.GDGDevelopObjects1= [];
gdjs.IntroScreenCode.GDMundodrigoObjects1= [];
gdjs.IntroScreenCode.GDDevelopObjects1= [];

gdjs.IntroScreenCode.conditionTrue_0 = {val:false};
gdjs.IntroScreenCode.condition0IsTrue_0 = {val:false};
gdjs.IntroScreenCode.condition1IsTrue_0 = {val:false};
gdjs.IntroScreenCode.condition2IsTrue_0 = {val:false};
gdjs.IntroScreenCode.conditionTrue_1 = {val:false};
gdjs.IntroScreenCode.condition0IsTrue_1 = {val:false};
gdjs.IntroScreenCode.condition1IsTrue_1 = {val:false};
gdjs.IntroScreenCode.condition2IsTrue_1 = {val:false};

gdjs.IntroScreenCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.IntroScreenCode.GDGDevelopObjects1.length = 0;
gdjs.IntroScreenCode.GDMundodrigoObjects1.length = 0;
gdjs.IntroScreenCode.GDDevelopObjects1.length = 0;


{

gdjs.IntroScreenCode.GDDevelopObjects1.createFrom(runtimeScene.getObjects("Develop"));
gdjs.IntroScreenCode.GDGDevelopObjects1.createFrom(runtimeScene.getObjects("GDevelop"));
gdjs.IntroScreenCode.GDMundodrigoObjects1.createFrom(runtimeScene.getObjects("Mundodrigo"));

gdjs.IntroScreenCode.condition0IsTrue_0.val = false;
{
gdjs.IntroScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroScreenCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.IntroScreenCode.GDMundodrigoObjects1.length ;i < len;++i) {
    gdjs.IntroScreenCode.GDMundodrigoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroScreenCode.GDDevelopObjects1.length ;i < len;++i) {
    gdjs.IntroScreenCode.GDDevelopObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroScreenCode.GDGDevelopObjects1.length ;i < len;++i) {
    gdjs.IntroScreenCode.GDGDevelopObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.IntroScreenCode.GDMundodrigoObjects1.createFrom(runtimeScene.getObjects("Mundodrigo"));

gdjs.IntroScreenCode.condition0IsTrue_0.val = false;
{
gdjs.IntroScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "MostraLogo");
}if (gdjs.IntroScreenCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.IntroScreenCode.GDMundodrigoObjects1.length ;i < len;++i) {
    gdjs.IntroScreenCode.GDMundodrigoObjects1[i].setOpacity(gdjs.IntroScreenCode.GDMundodrigoObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "MostraLogo")*2.3));
}
}}

}


{

gdjs.IntroScreenCode.GDMundodrigoObjects1.createFrom(runtimeScene.getObjects("Mundodrigo"));

gdjs.IntroScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroScreenCode.conditionTrue_1 = gdjs.IntroScreenCode.condition0IsTrue_0;
gdjs.IntroScreenCode.condition0IsTrue_1.val = false;
gdjs.IntroScreenCode.condition1IsTrue_1.val = false;
{
gdjs.IntroScreenCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "EscondeLogo");
}if ( gdjs.IntroScreenCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroScreenCode.GDMundodrigoObjects1.length;i<l;++i) {
    if ( gdjs.IntroScreenCode.GDMundodrigoObjects1[i].isVisible() ) {
        gdjs.IntroScreenCode.condition1IsTrue_1.val = true;
        gdjs.IntroScreenCode.GDMundodrigoObjects1[k] = gdjs.IntroScreenCode.GDMundodrigoObjects1[i];
        ++k;
    }
}
gdjs.IntroScreenCode.GDMundodrigoObjects1.length = k;}}
gdjs.IntroScreenCode.conditionTrue_1.val = true && gdjs.IntroScreenCode.condition0IsTrue_1.val && gdjs.IntroScreenCode.condition1IsTrue_1.val;
}
}if (gdjs.IntroScreenCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.IntroScreenCode.GDMundodrigoObjects1.length ;i < len;++i) {
    gdjs.IntroScreenCode.GDMundodrigoObjects1[i].hide();
}
}}

}


{

gdjs.IntroScreenCode.GDDevelopObjects1.createFrom(runtimeScene.getObjects("Develop"));
gdjs.IntroScreenCode.GDGDevelopObjects1.createFrom(runtimeScene.getObjects("GDevelop"));

gdjs.IntroScreenCode.condition0IsTrue_0.val = false;
{
gdjs.IntroScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "MostraDevelop");
}if (gdjs.IntroScreenCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.IntroScreenCode.GDGDevelopObjects1.length ;i < len;++i) {
    gdjs.IntroScreenCode.GDGDevelopObjects1[i].setOpacity(gdjs.IntroScreenCode.GDGDevelopObjects1[i].getOpacity() + ((gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "MostraDevelop")-7)*2.3));
}
}{for(var i = 0, len = gdjs.IntroScreenCode.GDDevelopObjects1.length ;i < len;++i) {
    gdjs.IntroScreenCode.GDDevelopObjects1[i].setOpacity(gdjs.IntroScreenCode.GDDevelopObjects1[i].getOpacity() + ((gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "MostraDevelop")-7)*2.3));
}
}}

}


{

gdjs.IntroScreenCode.GDDevelopObjects1.createFrom(runtimeScene.getObjects("Develop"));
gdjs.IntroScreenCode.GDGDevelopObjects1.createFrom(runtimeScene.getObjects("GDevelop"));

gdjs.IntroScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroScreenCode.conditionTrue_1 = gdjs.IntroScreenCode.condition0IsTrue_0;
gdjs.IntroScreenCode.condition0IsTrue_1.val = false;
gdjs.IntroScreenCode.condition1IsTrue_1.val = false;
{
gdjs.IntroScreenCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 12, "EscondeDevelop");
}if ( gdjs.IntroScreenCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.IntroScreenCode.GDGDevelopObjects1.length;i<l;++i) {
    if ( gdjs.IntroScreenCode.GDGDevelopObjects1[i].isVisible() ) {
        gdjs.IntroScreenCode.condition1IsTrue_1.val = true;
        gdjs.IntroScreenCode.GDGDevelopObjects1[k] = gdjs.IntroScreenCode.GDGDevelopObjects1[i];
        ++k;
    }
}
gdjs.IntroScreenCode.GDGDevelopObjects1.length = k;}}
gdjs.IntroScreenCode.conditionTrue_1.val = true && gdjs.IntroScreenCode.condition0IsTrue_1.val && gdjs.IntroScreenCode.condition1IsTrue_1.val;
}
}if (gdjs.IntroScreenCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.IntroScreenCode.GDGDevelopObjects1.length ;i < len;++i) {
    gdjs.IntroScreenCode.GDGDevelopObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroScreenCode.GDDevelopObjects1.length ;i < len;++i) {
    gdjs.IntroScreenCode.GDDevelopObjects1[i].hide();
}
}}

}


{


gdjs.IntroScreenCode.condition0IsTrue_0.val = false;
{
gdjs.IntroScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 13, "MostraDevelop");
}if (gdjs.IntroScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "InitScreen", false);
}}

}

return;
}
gdjs['IntroScreenCode']= gdjs.IntroScreenCode;
