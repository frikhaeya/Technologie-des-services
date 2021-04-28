"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Broker = /** @class */ (function () {
    function Broker() {
        this.topics = {};
    }
    Broker.getInstance = function () {
        if (!Broker.instance) {
            Broker.instance = new Broker();
        }
        return Broker.instance;
    };
    Broker.prototype.subscribe = function (topic, callback) {
        if (topic && !this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(callback);
    };
    Broker.prototype.unsubscribe = function (topic, callback) {
        if (topic && !this.topics[topic]) {
            return;
        }
        this.topics[topic] = this.topics[topic].filter(function (x) { return x != callback; });
        if (!this.topics[topic].length) {
            delete this.topics[topic];
        }
    };
    Broker.prototype.publish = function (topic, msg) {
        var v = this.topics[topic];
        if (v != null && typeof v !== "undefined") {
            for (var i = 0; i < v.length; ++i) {
                var callback = v[i];
                callback(msg);
            }
        }
    };
    return Broker;
}());
exports.Broker = Broker;
var IntentEvent;
(function (IntentEvent) {
    IntentEvent[IntentEvent["DISPLAY"] = 2] = "DISPLAY";
    IntentEvent[IntentEvent["CREATE"] = 4] = "CREATE";
    IntentEvent[IntentEvent["UPDATE"] = 8] = "UPDATE";
    IntentEvent[IntentEvent["DELETE"] = 16] = "DELETE";
    IntentEvent[IntentEvent["ADD"] = 32] = "ADD";
    IntentEvent[IntentEvent["REMOVE"] = 64] = "REMOVE";
})(IntentEvent = exports.IntentEvent || (exports.IntentEvent = {}));
var StateChangeEvent;
(function (StateChangeEvent) {
    StateChangeEvent[StateChangeEvent["LOADED"] = 128] = "LOADED";
    StateChangeEvent[StateChangeEvent["CREATED"] = 256] = "CREATED";
    StateChangeEvent[StateChangeEvent["UPDATED"] = 512] = "UPDATED";
    StateChangeEvent[StateChangeEvent["DELETED"] = 1024] = "DELETED";
    StateChangeEvent[StateChangeEvent["ADDED"] = 2048] = "ADDED";
    StateChangeEvent[StateChangeEvent["REMOVED"] = 4096] = "REMOVED";
})(StateChangeEvent = exports.StateChangeEvent || (exports.StateChangeEvent = {}));
var MVPEvent = /** @class */ (function () {
    function MVPEvent(event, state) {
        this._event = event;
        this._state = state;
    }
    MVPEvent.prototype.isIntent = function () {
        return this._event in IntentEvent;
    };
    MVPEvent.prototype.isStateChange = function () {
        return this._event in StateChangeEvent;
    };
    Object.defineProperty(MVPEvent.prototype, "event", {
        get: function () {
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MVPEvent.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    return MVPEvent;
}());
exports.MVPEvent = MVPEvent;
var Observable = /** @class */ (function () {
    function Observable(theTopic) {
        this._topic = theTopic;
    }
    Observable.prototype.notify = function (msg) {
        Broker.getInstance().publish(this._topic, msg);
    };
    Object.defineProperty(Observable.prototype, "topic", {
        get: function () {
            return this._topic;
        },
        enumerable: true,
        configurable: true
    });
    return Observable;
}());
exports.Observable = Observable;
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(name) {
        var _this = _super.call(this, name + "Version#" + View.version.toString(32)) || this;
        ++View.version;
        return _this;
    }
    View.prototype.fireIntent = function (event, newState) {
        this.notify(new MVPEvent(event, newState));
    };
    View.version = 0;
    return View;
}(Observable));
exports.View = View;
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model(name) {
        var _this = _super.call(this, name + "Version#" + Model.version.toString(32)) || this;
        ++Model.version;
        return _this;
    }
    Model.prototype.fireStateChange = function (event, newState) {
        this.notify(new MVPEvent(event, newState));
    };
    Model.version = 0;
    return Model;
}(Observable));
exports.Model = Model;
var Presenter = /** @class */ (function () {
    function Presenter() {
    }
    Object.defineProperty(Presenter.prototype, "view", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Presenter.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    Presenter.prototype.attach = function (view, model) {
        this._view = view;
        this._model = model;
        Broker.getInstance().subscribe(this._view.topic, this.updateModel);
        Broker.getInstance().subscribe(this._model.topic, this.updateView);
    };
    Presenter.prototype.detach = function () {
        Broker.getInstance().unsubscribe(this._view.topic, this.updateModel);
        Broker.getInstance().unsubscribe(this._model.topic, this.updateView);
    };
    Presenter.prototype.updateModel = function (msg) {
        if (msg instanceof MVPEvent && msg.isIntent()) {
            this._model.handleIntent(msg.event, msg.state);
        }
    };
    Presenter.prototype.updateView = function (msg) {
        if (msg instanceof MVPEvent && msg.isStateChange()) {
            this._view.handleStateChange(msg.event, msg.state);
        }
    };
    return Presenter;
}());
exports.Presenter = Presenter;
