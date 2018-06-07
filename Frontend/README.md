# Learning System #

http://59.110.23.212/

##  ##

# 英语 #

## 1. 流程： ##

- 	第二遍提交答案显示题目解析之后，加一个按钮在文章右侧显示全文翻译；

- 	全文翻译后是英译汉，要给出“英译汉”这个标题此时如果用户之前点击了不懂的句子，就把所有不同的句子英文显示出来，让他翻译中文，不判断对错，直接给出答案，跳到下一步。如果用户之前没有点击不懂的句子，就把本篇文章的所有长难句的英文都显示出来，让他翻译中文，不判断对错，直接给出答案，跳到下一步。

- 	下一步为汉译英3句，要给出“汉译英（写作练习）”这个标题，不用例句，判断对错（完全一致）后显示正确答案，只有用户输入完全正确，才跳到下一步；

- 	*下一步显示图表。*


## 2. 个人中心导航： ##
	用户非首次登录后，出现此导航。只有在刚登录或者学完一课后，才可点击个人中心按钮。
	
- 先渲染出两个按钮：“学习数据”、*“用户资料”*。

	其中，用户资料：用户注册时填写的资料，包括但不限于用户名、密码、姓名、专业，可编辑修改。

- 点击”学习数据“按钮后，显示用户学过的课程列表，其中没学完的课时不计入个人中心中的课时。点开之后有：左侧为原文，右侧为四个按钮（可收起）/列表/导航：“本课生词”、“本课难句”、“本课错题”、“本课写作”。*以及图表*，图表可暂且搁置。用户可自己点击选择查看。用户一进入界面时，右侧默认为不会的单词。

	其中，本课生词：学习过程中用户点击过的单词以及翻译。本课难句：学习过程中用户点击过的句子和翻译。本课错题：学习过程中用户第二次答题时做错的题目、答案解析、*错误的可能原因*。本课写作：本课全部汉译英，无论对错。
	


## 3. 复习导航： ##
	用户非首次登录后，左侧应出现此导航。只有在刚登录或者学完一课后，才可点击个人中心按钮。
	
- 显示用户学习过的课时（“UNIT 1 COURSE 7”）其中没学完的课时不计复习中的课时。。点击某一课时后，右中视图区域渲染：左侧渲染该课时的原文（仅作为展示），右侧初始化为为四个竖直排列按钮（可收起）：“重点词汇”、“长难句解析”、“全文翻译”、“习题解析”。用户可自己点击选择查看。用户一进入界面时，右侧默认为重点词汇。

	其中，重点单词：文章本身存的重点单词。长难句：文章本身的长难句。全文翻译：该英文文章全文的翻译。题目解析：所有题目的原题，和正确答案的标注。


## 4. 周测： ##
	
- 可暂且搁置。一个单元7课，第7课为周测，开始前需要有弹窗提示用户“此课为周测，倒计时xx分钟，时间到或者点击到其他地方影响测试，将视为自动提交答卷”，需要根据答案给用户进行判分，没答的记作错误。


## 5. 其他： ##

- 无论何种情况，左侧的导航栏一直出现。

- 学习过程中，只能使用“帮助”、“返回”、“登出”按钮。其中右上角应有“返回”按钮，点一下就返回英语主界面，再点一下就返回四科选择界面。用户在点击“返回”、“登出”按钮时，应当有提示，让用户选择是否确认退出当前页面（“是”、“否”）。

## 目前要做的：英语接口 词汇量测试 ##


# 逻辑 #

## 1. 水平测试 ##

- 覆盖所有小类。先给中级题1道，答对给难级题1道，答错给容易题1道。大概30-40题。
- 每大类错误率按降序排列（先形式逻辑，再论证逻辑）。

## 2. 进入学习 ##

- 按照水平测试错误率降序进行学习。每次学习1个大类。
- 流程：**知识点精要**→**例题（重点题型）**→**习题（强化练习）**→**测验**
- **知识点精要**：每个大类的知识点精要。显示本课的逻辑常识、解题方法。
- **重点题型**：每个小类按照易、中、难的顺序各1道。左侧题目，右侧选项，用户点击之后，显示答案及解析。
- **强化练习**：每个小类按照易、中、难的顺序各1、2、2道。显示与重点题型相同。
- **测验**：覆盖所有小类，共15道题。从学员在例题、习题中未见过的题目中随机抽取，大致易和难共5道，中10道。用户做完之后，给出正确率的统计。超过2/3的，才可以进入下一大类，否则下一课还是此大类。

~~不必左右分开显示题目和选项？~~

## 3. 复习 ##

- 一般复习，重点复习（薄弱点）
- **一般复习**：错误率低于1/3的模块
- **重点复习**：错误率高于1/3的模块
- 只要能重新看、重新做即可，暂时只记录复习过哪些课各几次，其他数据均不用记录。

## 4. 数据统计 ##

- 每次完成一课的练习，呈现出一张**统计图表**（整个大类的错误率、大类中的小类分别的错误率）（错选、漏选）

## 目前要做的：重点学习等  ##

# 写作 #

- 论证有效性分析
- 论说文

## 1. 写作技巧精讲 ##

## 2. 巩固强化学习 ##

## 3. 今年真题演练 ##

## 4. 数据统计 ##

- 每次完成一课的练习，呈现出一张**统计图表**（整个大类的错误率、大类中的小类分别的错误率）（错选、漏选）

## 目前要做的：上传 错误率（错选漏选）（选择能判断用户选择了哪些） ##

## 目前要做的：服务器子网页 ##