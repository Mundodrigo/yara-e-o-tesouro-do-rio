gdjs.InstructionsCode = {};


gdjs.InstructionsCode.GDBackgroundObjects1= [];
gdjs.InstructionsCode.GDReturnObjects1= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_0 = {val:false};
gdjs.InstructionsCode.conditionTrue_1 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_1 = {val:false};

gdjs.InstructionsCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.InstructionsCode.GDBackgroundObjects1.length = 0;
gdjs.InstructionsCode.GDReturnObjects1.length = 0;


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition1IsTrue_0;
gdjs.InstructionsCode.conditionTrue_1.val = context.triggerOnce(50217872);
}
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}

return;
}
gdjs['InstructionsCode']= gdjs.InstructionsCode;
