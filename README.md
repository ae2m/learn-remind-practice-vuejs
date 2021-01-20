# Automated testing: Web
 
##Contents:

- [Required Software](#requiredsoftware)
- [Setup Overview](#setupoverview)
- [Running Tests](#runningtests)
- [Reports](#reports)

## Required Software

1. [JDK 1.8 or later](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
2. [Apache Maven](https://maven.apache.org/download.cgi)
3. Any IDE (Steps are included for Intellij and Eclipse)

    3.1 [Intellij Community/Ultimate Edition](https://www.jetbrains.com/idea/download/index.html#section=windows)
    
    - Please refer to this link [Cucumber support in Intellij](https://www.jetbrains.com/help/idea/bdd-frameworks.html) to Enable Cucumber support in Intellij using Maven.
    - If not enabled by default, go to File -> Settings -> File Types. Select Cucumber Scenario and in Registered Patterns add '.feature".
    
    3.2 [Eclipse](http://www.eclipse.org/downloads/) 
    
    - Once Eclipse is installed, Cucumber plugin needs to be installed. Click Help -> Install New Software and click "Add" in the "Work With" section.
    - In the next screen to _Add Repository_, use "http://cucumber.github.com/cucumber-eclipse/update-site" in the Location field.
    - In the next screen, click "Cucumber Eclipse Plugin" to install the plugin.
    
4. ngrok (Optional. If you plan to run test cases from laptop)

## SetupOverview
The below diagram represents the different components that are part of this testing setup.

 ![Sequence](sequencediagram.png)
 
 - _PayerFSP Simulator, PayeeFSP Simulator_: Mock Simulators that represent Payer and Payee FSPs that are used to receive the callbacks from Mojaloop switch and also to return default payer/payee details and quote responses.
    These simulators are developed using Spring Boot framework and are provisioned once the tests are started using maven.
 - _Cucumber_: Represents the Cucumber-Java Step Definitions that sends the requests to the Switch and query PayerFSP/PayeeFSP for the callback responses.
 - _Switch_: Represents Mojaloop Switch against which all these test cases are executed.
 
 **_Folder Structure_**
  - ``/src/main/java``
    - `com.mojaloop.fsp` - This package contains the classes PayerFsp and PayeeFsp. These are the Spring Boot Applications that simulate the functionality provided by a Payer and a Payee FSP respectively.
    - `com.mojaloop.utils` - This package contains Utility class. This class contains methods to wrap asynchronous callbacks from Mojaloop Switch into synchronous request-response behavior.
    
  - `/test/resources/features` - The sub-folders in here each represent different business feature offered by Mojaloop application. 
  These sub-folders in turn contain 1 or more Gherkin feature files. 
  
  - `/test/java/stepdefs` - The sub-folders and the corresponding Classes in here has the code that implement Step Definitions in Cucumber Java.
  
 ## Running Tests
 There are different ways in which these tests can be executed. 
  - From IDE - Intellij: 
    - Doing a Right-Click on the feature files gives you different options to run  the entire frature or a specific scenario.
    - 
  
  - From IDE - Eclipse:
  
  - From Command Line: 
    - Apache maven should be successfully installed to run this command
    - From the command line go to the directory of these tests, type `mvn clean verify` to trigger the tests.
    - To run specific tags, use this command `mvn clean verify -Dcucumber.options=""--tags @<tag-name>"`


