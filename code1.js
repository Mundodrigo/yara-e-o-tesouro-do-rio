gdjs.InitScreenCode = {};


gdjs.InitScreenCode.GDbg_95InitObjects1= [];
gdjs.InitScreenCode.GDlogo_95initObjects1= [];
gdjs.InitScreenCode.GDbtn_95playObjects1= [];
gdjs.InitScreenCode.GDbtn_95historyObjects1= [];
gdjs.InitScreenCode.GDbtn_95instObjects1= [];

gdjs.InitScreenCode.conditionTrue_0 = {val:false};
gdjs.InitScreenCode.condition0IsTrue_0 = {val:false};
gdjs.InitScreenCode.condition1IsTrue_0 = {val:false};
gdjs.InitScreenCode.condition2IsTrue_0 = {val:false};
gdjs.InitScreenCode.conditionTrue_1 = {val:false};
gdjs.InitScreenCode.condition0IsTrue_1 = {val:false};
gdjs.InitScreenCode.condition1IsTrue_1 = {val:false};
gdjs.InitScreenCode.condition2IsTrue_1 = {val:false};

gdjs.InitScreenCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.InitScreenCode.GDbg_95InitObjects1.length = 0;
gdjs.InitScreenCode.GDlogo_95initObjects1.length = 0;
gdjs.InitScreenCode.GDbtn_95playObjects1.length = 0;
gdjs.InitScreenCode.GDbtn_95historyObjects1.length = 0;
gdjs.InitScreenCode.GDbtn_95instObjects1.length = 0;


{



}


{


gdjs.InitScreenCode.condition0IsTrue_0.val = false;
{
gdjs.InitScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InitScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Weekend_in_Tattoine.ogg", true, 60, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.InitScreenCode.GDbtn_95playObjects1.createFrom(runtimeScene.getObjects("btn_play"));

gdjs.InitScreenCode.condition0IsTrue_0.val = false;
{
gdjs.InitScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_play", gdjs.InitScreenCode.GDbtn_95playObjects1).getEventsObjectsMap(), runtimeScene, false, false);
}if (gdjs.InitScreenCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.InitScreenCode.GDbtn_95playObjects1.length ;i < len;++i) {
    gdjs.InitScreenCode.GDbtn_95playObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.InitScreenCode.GDbtn_95playObjects1.createFrom(runtimeScene.getObjects("btn_play"));

gdjs.InitScreenCode.condition0IsTrue_0.val = false;
{
gdjs.InitScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_play", gdjs.InitScreenCode.GDbtn_95playObjects1).getEventsObjectsMap(), runtimeScene, false, true);
}if (gdjs.InitScreenCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.InitScreenCode.GDbtn_95playObjects1.length ;i < len;++i) {
    gdjs.InitScreenCode.GDbtn_95playObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.InitScreenCode.GDbtn_95playObjects1.createFrom(runtimeScene.getObjects("btn_play"));

gdjs.InitScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.InitScreenCode.conditionTrue_1 = gdjs.InitScreenCode.condition0IsTrue_0;
gdjs.InitScreenCode.condition0IsTrue_1.val = false;
gdjs.InitScreenCode.condition1IsTrue_1.val = false;
{
gdjs.InitScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_play", gdjs.InitScreenCode.GDbtn_95playObjects1).getEventsObjectsMap(), runtimeScene, false, false);
}if ( gdjs.InitScreenCode.condition0IsTrue_1.val ) {
{
gdjs.InitScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.InitScreenCode.conditionTrue_1.val = true && gdjs.InitScreenCode.condition0IsTrue_1.val && gdjs.InitScreenCode.condition1IsTrue_1.val;
}
}if (gdjs.InitScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "GameScreen");
}}

}


{

gdjs.InitScreenCode.GDbtn_95instObjects1.createFrom(runtimeScene.getObjects("btn_inst"));

gdjs.InitScreenCode.condition0IsTrue_0.val = false;
{
gdjs.InitScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_inst", gdjs.InitScreenCode.GDbtn_95instObjects1).getEventsObjectsMap(), runtimeScene, false, false);
}if (gdjs.InitScreenCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.InitScreenCode.GDbtn_95instObjects1.length ;i < len;++i) {
    gdjs.InitScreenCode.GDbtn_95instObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.InitScreenCode.GDbtn_95instObjects1.createFrom(runtimeScene.getObjects("btn_inst"));

gdjs.InitScreenCode.condition0IsTrue_0.val = false;
{
gdjs.InitScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_inst", gdjs.InitScreenCode.GDbtn_95instObjects1).getEventsObjectsMap(), runtimeScene, false, true);
}if (gdjs.InitScreenCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.InitScreenCode.GDbtn_95instObjects1.length ;i < len;++i) {
    gdjs.InitScreenCode.GDbtn_95instObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.InitScreenCode.GDbtn_95instObjects1.createFrom(runtimeScene.getObjects("btn_inst"));

gdjs.InitScreenCode.condition0IsTrue_0.val = false;
gdjs.InitScreenCode.condition1IsTrue_0.val = false;
{
{gdjs.InitScreenCode.conditionTrue_1 = gdjs.InitScreenCode.condition0IsTrue_0;
gdjs.InitScreenCode.condition0IsTrue_1.val = false;
gdjs.InitScreenCode.condition1IsTrue_1.val = false;
{
gdjs.InitScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_inst", gdjs.InitScreenCode.GDbtn_95instObjects1).getEventsObjectsMap(), runtimeScene, false, false);
}if ( gdjs.InitScreenCode.condition0IsTrue_1.val ) {
{
gdjs.InitScreenCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.InitScreenCode.conditionTrue_1.val = true && gdjs.InitScreenCode.condition0IsTrue_1.val && gdjs.InitScreenCode.condition1IsTrue_1.val;
}
}if ( gdjs.InitScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.InitScreenCode.conditionTrue_1 = gdjs.InitScreenCode.condition1IsTrue_0;
gdjs.InitScreenCode.conditionTrue_1.val = context.triggerOnce(53901344);
}
}}
if (gdjs.InitScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Instructions");
}}

}

return;
}
gdjs['InitScreenCode']= gdjs.InitScreenCode;
