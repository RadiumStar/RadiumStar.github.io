---
layout: post
read_time: true
show_date: true
title:  01 Introduction to Computer Network
date:   2023-10-13 13:32:20 -0600
description: some description of the computer network
img: assets/img/posts/20210125/Perceptron.jpg 
tags: [computer network]
author: RadiumStar
github:  
mathjax: yes
---
## 1. Internet
1. Internet互联网：全球范围内连接在一起的网络系统，network of networks
2. ISP互联网服务提供商：提供互联网接入
3. **protocols**协议：定义了网络之间收发信息的 **格式**，**顺序**，以及信息收发所采取的 **操作**
4. 端系统通过 通信链路 和 分组交换机 的网络连接在一起
5. 分组交换机：从它的一条入通信链路接收到达的分组（packet，包），并从它的一条出通信链路转发该分组
   1. 路由器router：通常用于网络核心
   2. 链路层交换机link-layer switch：通常用于接入网中

## 2. Network Edge
1. network edge
2. end system端系统 / host主机：位于网络边缘的所有设备
   1. 客户client
   2. 服务器server
3. packet包：主机会发送数据的包，其中delay
   $$
   Delay = \frac{L(\text{bits})}{R(\text{bits/sec})}
   $$