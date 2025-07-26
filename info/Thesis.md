# A Notification Based Nudge for Handling Excessive Smartphone Use
- Study and design of App Usage Monitor. Reduced over 6% smartphone usage.
- Conducted an online survey to learn smartphone usage behaviour among individuals.
- Designed a three week experiment for collecting smartphone usage data and validating the effectiveness of our application.
- [https://arxiv.org/abs/2507.14702](https://arxiv.org/abs/2507.14702)

## Abstract
Excessive use of smartphones is a worldwide known issue. In
this study, we proposed a notification-based intervention approach to reduce smartphone overuse without making the user feel any annoyance or
irritation. We did a user study (n = 109) where we found that 19.3% of
the participants are unwilling to use any smartphone usage limiting application because a) they do not want their smartphone activities to get
restricted or b) those applications are annoying. Following that, we devised a hypothesis to minimize smartphone usage among undergraduates.
Finally, we designed a prototype for android named “App Usage Monitor” and conducted a 3-week long experiment through which we found
proof of concept for our hypothesis. In our prototype, we combined techniques such as nudge and visualization to increase self-awareness among
the user by leveraging notification.

## Conclusion
In this article, we conducted comprehensive research on how we can alleviate the
worldwide issue of excessive smartphone usage among undergraduate students.
Initially, we investigated the consequences of excessive smartphone use. After
that, we reviewed several previous works and conducted a user analysis. We
surveyed 109 undergraduate students to better understand their smartphone use
habits. Then, based on the literature review and user study, we hypothesized
the lack of self-awareness among the undergraduate students and proposed a
notification-based smartphone mitigation prototype “App Usage Monitor” to
minimize excessive smartphone usage among undergraduate students. To prove
our hypothesis and understand smartphone usage behavior, we conducted a 3-
week long experiment with 16 volunteers.
The result revealed that most of the participants’ opinion about their own
smartphone usage was wrong which verifies our hypothesis. The result of the
experiment also showed a significant decrease in smartphone usage among the
participants when the intervention was applied compared to their usual usage. So
we can say that making the user more self-aware reduces excessive smartphone
use.
Finally, we think subtle and familiar interventions can be used to create
powerful tools for mitigating various technology overuse. We hope to see more
works that try to achieve smartphone usage mitigation via unforced techniques.

## App Usage Monitor
# Introduction
App usage tracker is built for collecting data for our thesis. App usage tracker is a simple app that tracks the usage of all your apps within your smartphone. You can see your daily or weekly usage history for any of your installed apps(up to the past 30 days). You can set daily or weekly targets and choose to get notifications at multiple levels of usage for any app. You can also see your past target history(how much of the target you used).

**App Link**: [https://drive.google.com/file/d/1ArCPhMQ9x4V-bBE1AZaaZXO9OOIQNRT3/view?usp=drive_link](https://drive.google.com/file/d/1ArCPhMQ9x4V-bBE1AZaaZXO9OOIQNRT3/view?usp=drive_link)
**Github Link**: [https://github.com/diptodeydip/App_Usage_Tracker](https://github.com/diptodeydip/App_Usage_Tracker)

## Notifications
-  Upon exceeding the specified target for an app.
-  Upon exceeding 90% of the specified target for an app
-  Upon exceeding 80% of the specified target for an app
-  Upon exceeding 70% of the specified target for an app
-  Upon exceeding 60% of the specified target for an app
-  Upon exceeding 50% of the specified target for an app

## Note
The app is still in its early stage and we will update the app once we get any bug with the fix. So please give us your feedback, your feedback will be greatly appreciated.

# Full Thesis
# A Notification Based Nudge for Handling

# Excessive Smartphone Use

```
Partha Sarker^1 ⋆, Dipto Dey^1 ⋆, and Marium-E-Jannat^2
```
(^1) Shahjalal University of Science and Technology, Sylhet, Bangladesh
dipdey093@gmail.com, parthasarker3@gmail.com
(^2) University of British Columbia, Vancouver, Canada
jannat.16.11@gmail.com
Abstract.Excessive use of smartphones is a worldwide known issue. In
this study, we proposed a notification-based intervention approach to re-
duce smartphone overuse without making the user feel any annoyance or
irritation. We did a user study (n = 109) where we found that 19.3% of
the participants are unwilling to use any smartphone usage limiting ap-
plication because a) they do not want their smartphone activities to get
restricted or b) those applications are annoying. Following that, we de-
vised a hypothesis to minimize smartphone usage among undergraduates.
Finally, we designed a prototype for android named “App Usage Moni-
tor” and conducted a 3-week long experiment through which we found
proof of concept for our hypothesis. In our prototype, we combined tech-
niques such as nudge and visualization to increase self-awareness among
the user by leveraging notification.
Keywords:Smartphone Addiction·Excessive Smartphone Use·Smart-
phone Usage Behavior.

## 1 Introduction

With the advancement of smartphone technology, people’s engagement with it is
increasing proportionally. In almost every aspect of one’s life, smartphones are
being used, such as for exchanging opinions, communicating with friends and
relatives, and getting news and updates about any sector. Thus, smartphone
overuse is rarely generated by the phone or tablet itself, rather our ability to
instantly connect to the games, applications, and online worlds using it.
Although smartphone applications have compelling ways of improving our
lives along with preventing and treating conditions like diabetes [1] and alco-
holism [5], but if used excessively, it can lead to physical and mental health
problems, including vision disorders, signs of joint pain, neck pain [15], sleep
problems, and addiction to smartphones [14,16]. Individuals’ time spent on so-
cial media networks may have psychological consequences. Many therapists have
noticed indications of anxiety and despair in those who use social media networks

```
⋆Equal Contribution
```

excessively [25]. Furthermore, excessive use of smartphones has negative conse-
quences on our social interactions, such as reducing the quality of conversation
[18,22], lowering the attention span and making companions uncomfortable.
Researchers have been designing various usage controlling applications to
tackle this overuse issue. These applications mainly utilize strategies such as
blocking, nudge, visualization, and cognitive burden. Despite the applications
being effective, the user experience is often unpleasant. In a study, participants
reported that restriction on smartphone use causes frustration and irritation
due to potential inconveniences [9]. Okeke et al.[19] nudged the user by using
repetitive vibration to reduce their smartphone use. Although they successfully
reduced digital consumption, the majority (26/31) of the participants found the
vibrations to be irritating during their experiment.
In this paper, we hypothesized that people are unaware of their smartphone
usage, which leads to smartphone overuse. Based on the hypothesis, we cre-
ated an android prototype named “App Usage Monitor” where we introduced a
very subtle and user-friendly intervention approach. The prototype makes use
of notifications to deliver necessary information about the application’s respec-
tive usage. Notifications are delivered based on the specified target for individ-
ual applications (Fig. 1). If a notification is selected, a detailed usage graph
is shown (Fig. 2), which helps the user increase self-awareness as self-reflection
has been proved to be very successful in mitigating technology overuse. Peo-
ple can acquire insights into their time management by visualizing application
usage history [20]. To better understand the design requirements for our proto-
type, we first performed an online preliminary survey with 109 undergraduate
participants (68.8% male, 31.2% female). Then, with 16 undergraduate volun-
teers (81.25% male, 18.75% female), we conducted a 3-week-long field research.
The result from the experiment showed that notification has the potential to be
a powerful weapon against excessive smartphone use. The combined result of
our preliminary survey and experiment also revealed the lack of self-awareness
among undergraduate students.

## 2 Background and Related Works

According to the techniques used by the researchers, we divided the existing
works into the following categories-

2.1 Blocking

Such works depend on limiting user interaction with the device by restricting
certain or all apps and activities. In AppDetox [17], users can create rules for
individual applications and restrict their access according to the rule. Let’s Focus
[7] follows a location-based approach where interaction with the smartphone is
blocked within a classroom. Lock n’Lol [12] and NUGU [13] restricts a group of
people from using their smartphones to increase concentration and self-regulation
within the group.


```
A Notification Based Nudge for Handling Excessive Smartphone Use 3
```
```
Fig. 1: Usage Notifications Fig. 2: App Details Activity
```
2.2 Burden

In recent years, burdening has gained popularity among researchers. The goal
here is to discourage unnecessary smartphone use by making the user give extra
effort to do certain activities on their smartphone. Interaction Restraint [21]
and LocknType [10] make the user type a long number before launching certain
applications on their smartphone. Time Off [3] shows animation on the top of
the screen with notifications and vibrations during smartphone overuse. Kim. et
al. [8] uses a lockout system that only unlocks when the reason for smartphone
use is stated.

2.3 Nudge

A Nudge is an easy and cheap way to avoid intervention that can change people’s
behavior predictably without restricting their choices. Good Vibrations [19] uses
repetitive vibration as a nudge to alert the user during smartphone overuse.
MyTime [6] is another application that displays a popup on the screen when the
user-defined usage limit is crossed. Aditya et al. [23] designed a desktop browser
extension that nudges the user to control social media addiction.

2.4 Visualization

Using visualization to make the user more self-aware has been proved to be very
successful during past studies. TILT [4] is an android application that uses a
graph to deliver overall smartphone usage and the number of unlocks to the
user. LockDoll [2] is an Arduino-based doll that waves its hands to alert the
connected group of people about their smartphone use. TimeAware [11] and
meTime [24] are desktop applications designed to display how a user spends
their time across different applications to increase awareness.


In this study, we combined both nudge and visualization techniques to create
an effective intervention. We designed a working prototype where notification is
used to deliver real-time usage information about individual applications present
on the smartphone. The prototype also has a detailed usage graph for individual
applications with past information to make it easier for the user to self-reflect
and minimize their smartphone activities.

## 3 Preliminary Study

We performed a preliminary study to better understand smartphone usage be-
havior and mindfulness among undergraduate students. The survey was made
using Google Form. There were three types of questions on the survey. At first,
we asked the participants about the understanding of their smartphone use. Af-
ter that, we inquired about limiting smartphone usage, and the last part of the
survey contained questions about their smartphone usage pattern and behav-
ior, which will later be cross-checked with the actual usage data collected via
“App Usage Monitor” to realize the users’ insight about their smartphone use.
In the end, we were able to gather 109 undergraduate participants who freely
completed our survey (68.8% male, 31.2% female), ages ranging from 20 to 26.
After investigating the survey response we found that the majority of the
participants (69.7%) felt that they overuse their smartphones. But among them,
when asked how they limit(or try to limit) their smartphone usage, 38.5% said
they did not even try to limit their smartphone usage. And for the rest, staying
away from the phone is the most popular way to limit smartphone use unless we
consider the responses of participants who didn’t even try to limit it.
Among all of the participants, only 20.2% of the participants ever used any
usage-limiting app. The primary issue that kept them from using any usage lim-
iting app is that they do not want their smartphone usage to get restricted. Upon
asking the participants who stopped using usage limiting applications about their
reason, they replied that those apps were bothersome and not practical.
In the usage behavioral section, 62.4% answered that they spend most of their
time on smartphones doing social activities while 47.7% said they use Facebook
the most. 42.2% of the participants think that they spend more time on their
smartphones in the Evening (Table 1).
Even though most participants did not use or know about any usage limiting
app, a fair number of participants gave their negative thoughts about restrictive
measures and thought them to be irritating. Although restrictive interventions
have proven to be quite successful in mitigating excessive smartphone usage,
the purpose is lost if nobody uses them. To overcome these limitations, we have
come to the following design objectives for an optimal intervention method:

- Should not interrupt the current workflow on the smartphone
- Should not be annoying or burdening
- Should be subtle yet effective
- Should work with little user interaction


```
A Notification Based Nudge for Handling Excessive Smartphone Use 5
```
## 4 App Usage Monitor Design

We developed a prototype named “App Usage Monitor” targeting android plat-
form while Firebase realtime database was used to store usage data of our par-
ticipants.
After opening the prototype, a list of all the applications present on the
smartphone along with the usage time and last access time is shown (Fig. 3).
Upon selecting an app from the application “App Details” activity is launched. In
this activity (Fig. 2), a detailed view of usage and all the target and notification
configuration is shown to the user. This prototype is normally fully customizable,
but for the sake of the experiment, we automatically set all the parameters to
automate the experiment.

```
Fig. 3: Main Activity Fig. 4: Target History
```
By clicking on the “Target History” button at the bottom of the “App Details”
activity, the user can see a list of all the previous targets and usage for that
application (Fig. 4).

## 5 Field Experiment

5.1 Experiment Design

We designed a 3-week long experiment where the first week functioned as the
baseline week, during which no intervention was used. We provided usage noti-
fications in the second week which we called the intervention week and tracked
how smartphone usage patterns changed relative to the baseline week. The third
week’s goal was to examine changes in smartphone usage behavior when usage
notifications were no longer sent.
When the prototype is first installed in the target device, the 0thweek starts.
The reason for starting with the 0thweek is to wait for the next Sunday to


come which marks the first or baseline week. During the whole experimentation
period, we disabled manual target and notification settings. All the target and
notification settings change automatically based on the usage and the phase of
the experiment they were in. In the 1stor baseline week, the targets were set to
none, so the participants never received any notification in the baseline week.
During the intervention week, daily and weekly targets for individual appli-
cations were automatically set. The daily target was calculated by simply taking
the average of that particular application’s total daily usage in the baseline week
and the weekly target was 7 times the daily target. There was a lower limit of 1
hour and an upper limit of 4 hours for the target so that users wouldn’t get too
many or too few notifications. All the notification options were also checked so
that the user starts getting notifications from 50% usage of the target.
And in the final week, all the targets and notifications were turned off to
observe the participants’ usual usage behavior after the intervention period.

5.2 Demographic

Based on the criteria we discussed in the earlier section, we were able to gather 33
(26 males, 7 females) volunteers who were willing to participate in the experiment
at the beginning. However, not all of them completed the whole experiment for
unforeseen reasons. In the end, 16 participants (13 males, 3 females) remained
who completely cleared the experiment. All the participants were undergraduate
students from various universities in Bangladesh, and their average age range was
20 to 26 years.

5.3 Data Collection

We hosted our prototype in Google Play Store, then shared it among our partic-
ipants. Because of some inconsistencies in the android’s alarm manager API,
some participants’ baseline week, intervention week, and review week lasted
longer than 1 week. So, before performing the analysis, we had to do some
post-processing to make our data-set ideal for evaluation. We took the last 7
days of usage data from the baseline week and the first 7 days of usage data
from the intervention and review week and filtered out the rest.

## 6 Result Analysis and Discussion

By analyzing the usage log of participants over 3 experiment weeks and com-
paring them with the survey response, we found strong evidence in favor of our
hypothesis and some interesting usage patterns among undergraduate students.
We divided our findings into three following parts.

6.1 Usage Notification Reduces Smartphone Use

Our results indicate that the time participants spent on the smartphone were
considerably decreased by providing app usage information via notification. 75%


```
A Notification Based Nudge for Handling Excessive Smartphone Use 7
```
of our participants’ usage decreased in the intervention week compared to that
of the baseline week. As we can see from Fig. 5, in the baseline week, the average
weekly usage per participant was 41 hours 26 minutes and 47 seconds. However,
after receiving notifications on the intervention week, participants’ average usage
went down to 38 hours 57 minutes and 22 seconds leading to an overall usage
reduction of 6.01%. Nevertheless, when the usage notification stopped showing
in the review week, the average weekly usage went up to 42 hours 26 minutes
and 51 seconds (8.23% increase compared to intervention week) which is almost
equal to the average usage time of the baseline week that further assists our
hypothesis. Fig. 5 shows the overall smartphone use across three experiment
weeks.

```
Fig. 5: Usage Bar Graph of Three Experiment Week
```
6.2 Low Self-Awareness

By comparing the survey response with the actual usage log collected from the
participants who completed the 3-week long study, we found a clear lack of self-
awareness among the undergraduate smartphone users. For the comparison to
be fair, we only sampled the usage data from the baseline week since there was
no intervention, and the main purpose of the baseline week was to be the point
of reference for the other experimentation weeks. After analyzing the survey
response and the usage log, we found that among all the participants, 62.5%
had higher average daily usage than their estimated average daily usage on the
survey. Half (50%) of the participants were wrong about the application they
used the most on their smartphones. 56.25% of the participants’ estimation about
the parts of the day (Table 1) they use their smartphone the most from the survey
did not match their actual usage history, thus implies that the undergraduate


students not only lack self-awareness about their smartphone usage but also lack
a good understanding about their overall smartphone usage behavior.

```
Table 1: Parts of the Day
```
```
Neme Time Range
Morning 6am-12pm
Afternoon 12pm-6pm
Evening 6pm-12am
Late at Night 12am-6am
```
6.3 Smartphone Usage Behavior

We found a wide range of application usage among our participants in our study.
However, among all of these apps, social media apps were the most popular
among undergraduates. Fig. 6 depicts the participants’ most frequently used pro-
grams based on their average daily usage. Facebook was the most popular app,
with about 1 hour 24 minutes and 26 seconds of average daily usage time. The
most launched application among our participants was also Facebook (Fig. 7).
In our study, we discovered that undergraduate students use their smartphones
the most at “Evening” and the least at “Morning”. Fig. 8 illustrates the frequency
of smartphone use according to parts of the day (Table 1).

## 7 Design Recommendation

The existing intervention designs’ major flaw is that they are very aggressive.
Many smartphone use mitigation technologies restrict access to applications and
specific activities to minimize smartphone usage. To discourage the user from
using smartphones, several tools utilize cognitive load to add extra burden when
using the smartphone. This type of intervention might work in a controlled
experiment environment where participants are required to use the mitigation
tool for the whole experiment duration and give off promising results.
Some methods aren’t forceful, but they’re so quiet that the user doesn’t even
notice their presence. Users should directly interact with these applications in
these circumstances in order to reap the benefits. Google’s “Digital Wellbeing”
project is an excellent example of this type of effort.
So, before designing smartphone usage mitigation systems, the researcher
must find the sweet spot between restrictiveness and being quiet, and go on
from there. In this age of ease, rather than seeking to reduce smartphone overuse
by making smartphone usage unpleasant, we should look at how we can make
smartphone use more comfortable while yet limiting excessive smartphone use.


```
A Notification Based Nudge for Handling Excessive Smartphone Use 9
```
Fig. 6: Top 10 Used Applications in First Week (Average Daily Use Time Based)

Fig. 7: Top 10 Used Applications in First Week (Average Daily Launch Count
Based)


```
Fig. 8: Smartphone Using Frequency According to Parts of the Day
```
## 8 Conclusion

In this article, we conducted comprehensive research on how we can alleviate the
worldwide issue of excessive smartphone usage among undergraduate students.
Initially, we investigated the consequences of excessive smartphone use. After
that, we reviewed several previous works and conducted a user analysis. We
surveyed 109 undergraduate students to better understand their smartphone use
habits. Then, based on the literature review and user study, we hypothesized
the lack of self-awareness among the undergraduate students and proposed a
notification-based smartphone mitigation prototype “App Usage Monitor” to
minimize excessive smartphone usage among undergraduate students. To prove
our hypothesis and understand smartphone usage behavior, we conducted a 3-
week long experiment with 16 volunteers.
The result revealed that most of the participants’ opinion about their own
smartphone usage was wrong which verifies our hypothesis. The result of the
experiment also showed a significant decrease in smartphone usage among the
participants when the intervention was applied compared to their usual usage. So
we can say that making the user more self-aware reduces excessive smartphone
use.
Finally, we think subtle and familiar interventions can be used to create
powerful tools for mitigating various technology overuse. We hope to see more
works that try to achieve smartphone usage mitigation via unforced techniques.


```
A Notification Based Nudge for Handling Excessive Smartphone Use 11
```
## References

1. Årsand, E., Muzny, M., Bradway, M., Muzik, J., Hartvigsen, G.: Performance of the
    first combined smartwatch and smartphone diabetes diary application study. Jour-
    nal of diabetes science and technology 9 (3), 556–563 (2015).https://doi.org/10.
    1177/1932296814567708,http://dx.doi.org/10.1177/
2. Choi, S., Jeong, H., Ko, M., Lee, U.: Lockdoll: providing ambient feedback of smart-
    phone usage within social interaction. In: Proceedings of the 2016 CHI Conference
    Extended Abstracts on Human Factors in Computing Systems. pp. 1165–
    (2016).https://doi.org/10.1145/2851581.
3. Chow, K.K.: Time off: designing lively representations as imaginative triggers for
    healthy smartphone use. In: International Conference on Persuasive Technology.
    pp. 135–146. Springer (2018).https://doi.org/10.1007/978-3-319-78978-1_
4. Foulonneau, A., Calvary, G., Villain, E.: Stop procrastinating: Tilt, time is life
    time, a persuasive application. In: Proceedings of the 28th Australian conference
    on computer-human interaction. pp. 508–516 (2016).https://doi.org/10.1145/
    3010915.
5. Gustafson, D., Mctavish, F., Chih, M.Y., Atwood, A., Johnson, R., Boyle, M., Levy,
    M., Driscoll, H., Chisholm, S., Dillenburg, L., Isham, A., Shah, D.: A smartphone
    application to support recovery from alcoholism: a randomized clinical trial. JAMA
    psychiatry 71 (5), 566–572 (2014).https://doi.org/10.1001/jamapsychiatry.
    2013.4642,http://dx.doi.org/10.1001/jamapsychiatry.2013.
6. Hiniker, A., Hong, S., Kohno, T., Kientz, J.A.: Mytime: Designing and evaluating
    an intervention for smartphone non-use. In: Proceedings of the 2016 CHI conference
    on human factors in computing systems. pp. 4746–4757 (2016).https://doi.org/
    10.1145/2858036.
7. Kim, I., Jung, G., Jung, H., Ko, M., Lee, U.: Let’s focus: location-based interven-
    tion tool to mitigate phone use in college classrooms. In: Proceedings of the 2017
    ACM International Joint Conference on Pervasive and Ubiquitous Computing and
    Proceedings of the 2017 ACM International Symposium on Wearable Computers.
    pp. 101–104 (2017).https://doi.org/10.1145/3123024.
8. Kim, I., Lee, U., Cha, N.: Exploring context-aware proactive blocking for distrac-
    tion management. In: Proceedings of the 2018 ACM International Joint Conference
    and 2018 International Symposium on Pervasive and Ubiquitous Computing and
    Wearable Computers. pp. 1202–1207 (2018).https://doi.org/10.1145/3267305.
    3274108
9. Kim, J., Jung, H., Ko, M., Lee, U.: Goalkeeper: Exploring interaction lockout
    mechanisms for regulating smartphone use. Proceedings of the ACM on Interactive,
    Mobile, Wearable and Ubiquitous Technologies 3 (1), 1–29 (2019).https://doi.
    org/10.1145/
10. Kim, J., Park, J., Lee, H., Ko, M., Lee, U.: Lockntype: Lockout task intervention
for discouraging smartphone app use. In: Proceedings of the 2019 CHI conference
on human factors in computing systems. pp. 1–12 (2019).https://doi.org/10.
1145/3290605.
11. Kim, Y.H., Jeon, J.H., Choe, E.K., Lee, B., Kim, K., Seo, J.: Timeaware: Leverag-
ing framing effects to enhance personal productivity. In: Proceedings of the 2016
CHI Conference on Human Factors in Computing Systems. pp. 272–283 (2016).
https://doi.org/10.1145/2858036.
12. Ko, M., Choi, S., Yatani, K., Lee, U.: Lock n’lol: group-based limiting assistance
app to mitigate smartphone distractions in group activities. In: Proceedings of


```
the 2016 CHI Conference on Human Factors in Computing Systems. pp. 998–
(2016).https://doi.org/10.1145/2858036.
```
13. Ko, M., Yang, S., Lee, J., Heizmann, C., Jeong, J., Lee, U., Shin, D., Yatani,
    K., Song, J., Chung, K.M.: Nugu: A group-based intervention app for improving
    self-regulation of limiting smartphone use. In: Proceedings of the 18th ACM confer-
    ence on computer supported cooperative work & social computing. pp. 1235–
    (2015).https://doi.org/10.1145/2675133.
14. Lee, H., Ahn, H., Choi, S., Choi, W.: The sams: Smartphone addiction management
    system and verification. Journal of medical systems 38 (1), 1–10 (2014).https:
    //doi.org/10.1007/s10916-013-0001-
15. Lee, S., Kang, H., Shin, G.: Head flexion angle while using a smartphone.
    Ergonomics 58 (2), 220–226 (2015).https://doi.org/10.1080/00140139.2014.
    967311 ,http://dx.doi.org/10.1080/00140139.2014.
16. Lin, Y.H., Chang, L.R., Lee, Y.H., Tseng, H.W., Kuo, T.B., Chen, S.H.: Devel-
    opment and validation of the smartphone addiction inventory (spai). PloS one
    9 (6), e98312 (2014).https://doi.org/10.1371/journal.pone.0098312,http:
    //dx.doi.org/10.1371/journal.pone.
17. Löchtefeld, M., Böhmer, M., Ganev, L.: Appdetox: helping users with mobile app
    addiction. In: Proceedings of the 12th international conference on mobile and ubiq-
    uitous multimedia. pp. 1–2 (2013).https://doi.org/10.1145/2541831.
18. Misra, S., Cheng, L., Genevie, J., Yuan, M.: The iphone effect: The quality of
    in-person social interactions in the presence of mobile devices. Environment and
    Behavior 48 (07 2014).https://doi.org/10.1177/
19. Okeke, F., Sobolev, M., Dell, N., Estrin, D.: Good vibrations: can a digital nudge
    reduce digital overload? In: Proceedings of the 20th international conference on
    human-computer interaction with mobile devices and services. pp. 1–12 (2018).
    https://doi.org/10.1145/3229434.
20. Pammer, V., Bratic, M., Feyertag, S., Faltin, N.: The Value of Self-tracking and
    the Added Value of Coaching in the Case of Improving Time Management, pp.
    467–472 (01 2015).https://doi.org/10.1007/978-3-319-24258-3_
21. Park, J., Sim, J.Y., Kim, J., Yi, M.Y., Lee, U.: Interaction restraint: Enforcing
    adaptive cognitive tasks to restrain problematic user interaction. In: Extended
    Abstracts of the 2018 CHI Conference on Human Factors in Computing Systems.
    pp. 1–6 (2018).https://doi.org/10.1145/3170427.
22. Przybylski, A.K., Weinstein, N.: Can you connect with me now? how the
    presence of mobile communication technology influences face-to-face conver-
    sation quality. Journal of Social and Personal Relationships 30 (3), 237–
    (2013).https://doi.org/10.1177/0265407512453827,http://dx.doi.org/10.
    1177/
23. Purohit, A.K., Barclay, L., Holzer, A.: Designing for digital detox: Making social
    media less addictive with digital nudges. In: Extended Abstracts of the 2020 CHI
    Conference on Human Factors in Computing Systems. pp. 1–9 (2020).https:
    //doi.org/10.1145/3334480.
24. Whittaker, S., Kalnikaite, V., Hollis, V., Guydish, A.: ‘Don’t waste my time’: Use
    of time information improves focus. In: Proceedings of the 2016 CHI Conference
    on Human Factors in Computing Systems. pp. 1729–1738 (2016).https://doi.
    org/10.1145/2858036.
25. Woods, H., Scott, H.: #Sleepyteens: Social media use in adolescence is associated
    with poor sleep quality, anxiety, depression and low self-esteem. Journal of Adoles-
    cence 51 , 41–49 (08 2016).https://doi.org/10.1016/j.adolescence.2016.05.
    008

