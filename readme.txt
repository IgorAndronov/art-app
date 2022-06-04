1. In case to specify main class:
option 1:
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <configuration>
        <mainClass>add.your.main.class.application.reference.here</mainClass>
    </configuration>
</plugin>

option2:
in pom.xml
<properties>
    <start-class>com.ishanitech.controller.Application</start-class>
</properties>

2. To make fat jar
mvn clean package spring-boot:repackage

3. deploy to cloudflare
https://dev.to/davidkou/how-to-deploy-a-react-app-to-cloudflare-host-for-free-358i
You can find your configuration file at: C:\Users\iandronov\.wrangler\config\default.toml

Enter Email:
777973@gmail.com / lifecel41SS!
Enter Global API Key:
f5c3cf32c748cbb0d3ba2b754c4db1d6e98db

api token:
ZX0BL70AsstoxKFg31-8FCOB8IUs0oJ8FVFJKVae

Steps:
1. wrangler init --site
2. edit wrangler.toml

Build:
1. npm run build
2. wrangler publish


