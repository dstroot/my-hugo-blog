---
author: dan
categories: null
date: '2014-06-29'
published: false
tags: null
title: Setup a CoreOS playground
url: /2014/06/29/setup-a-coreos-playground
---


<img class="lazy img-rounded img-responsive" src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=" alt="CoreOS" data-src="/assets/img/coreos-logo.png" width="594">

```

### If you want to test your very own CoreOS "fleet"

I recommend using Vagrant and VirtualBox. If you have them installed fire up a terminal and go to where you keep your Vagrant files and: 

```
$ git clone https://github.com/coreos/coreos-vagrant.git
$ cd coreos-vagrant
```

Now you have to edit two files before starting your cluster: `user.data` and `config.rb`.

In order to initialize a cluster (or fleet, or hive, or whatever you want to call your group of CoreOS machines) you will need an etcd discovery URL to bootstrap the cluster and elect an initial etcd leader. To do this you will need to replace <token> with your own URL from `https://discovery.etcd.io/new` before you `vagrant up`.  If you ever destroy your cluster with `vagrant destroy` you will *need to get a new token and update this file again* before you `vagrant up`. 


#### Start Machines Using Vagrant's default VirtualBox Provider

Start the machine(s):

```
$ vagrant up
```

List the status of the running machines:

```
$ vagrant status
Current machine states:

core-01                   running (virtualbox)
core-02                   running (virtualbox)
core-03                   running (virtualbox)

This environment represents multiple VMs. The VMs are all listed
above with their current state. For more information about a specific
VM, run `vagrant status NAME`.
```

Connect to one of the machines:

```
$ vagrant ssh core-01 -- -A
```








- Each unit of computing is described by a unit file (files because neckbeards know to keep things simple).  Here's what it looks like - this example is just running a dockerfile to run busybox and then a bash command to echo "Hello World" repeatedly. 

```
[Unit]
Description=My Service
After=docker.service
Requires=docker.service

[Service]
ExecStart=/usr/bin/docker run busybox /bin/sh -c "while true; do echo Hello World; sleep 1; done"

[Install]
WantedBy=multi-user.target


_Sources:_

* [KVM and Docker LXC Benchmarking with OpenStack](http://bodenr.blogspot.com/2014/05/kvm-and-docker-lxc-benchmarking-with.html)