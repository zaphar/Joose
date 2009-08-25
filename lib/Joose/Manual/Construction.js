/**

NAME
====

Joose.Manual.Construction - Object construction with Joose

WHERE'S THE CONSTRUCTOR?
========================

Do not re-define a constructor method for your classes! You were warned. 

When you build a class using Joose it will be managed by the instance of Joose.Meta.Class. This instance (a *metaclass instance*) provides a constructor for you. This constructor will perform attributes initialization and then will call a 'initialize' method with the same arguments.
So, instead of constructor, define an **initialize** method for your class.

However, if you are still sure you need a custom constructor you may provide it using a *constructor* builder:

    Class('User', {

        constructor : function (i, really, know, what, iam, doing) {
        }

        ....
    })



OBJECT CONSTRUCTION AND ATTRIBUTES
==================================

The Joose-provided constructor accepts an object with properties, matching your attributes. This is just another way in which Joose keeps you from worrying how classes are implemented. Simply define a class and you're ready to start creating objects!

    Class('User', {
        isa : Person,

        has : {
            password : { init : '12345' },
            lastLogin : { init : function () { return new Date() } }
        }
    })

    var user = new User({
        password : 'abcdef',
        lastLogin : 'Yesterday'
    })

If, during construction, you'll provide a function as a property value, it will be used as-is (not will be called).


AUTHOR
======

Nickolay Platonov <nickolay8@gmail.com>

Heavily based on the original content of Moose::Manual, by Dave Rolsky <autarch@urth.org>


COPYRIGHT AND LICENSE
=====================

Copyright (c) 2008, Malte Ubl

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Malte Ubl nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 


*/