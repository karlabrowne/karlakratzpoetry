import { F as getCjsExportFromNamespace, G as createCommonjsModule, I as imageUrl_umd, J as objectAssign } from './client.1faf5ff9.js';

/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
var browserSplit = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();

var indexOf = [].indexOf;

var indexof = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

// contains, add, remove, toggle


var classList = ClassList;

function ClassList(elem) {
    var cl = elem.classList;

    if (cl) {
        return cl
    }

    var classList = {
        add: add
        , remove: remove
        , contains: contains
        , toggle: toggle
        , toString: $toString
        , length: 0
        , item: item
    };

    return classList

    function add(token) {
        var list = getTokens();
        if (indexof(list, token) > -1) {
            return
        }
        list.push(token);
        setTokens(list);
    }

    function remove(token) {
        var list = getTokens()
            , index = indexof(list, token);

        if (index === -1) {
            return
        }

        list.splice(index, 1);
        setTokens(list);
    }

    function contains(token) {
        return indexof(getTokens(), token) > -1
    }

    function toggle(token) {
        if (contains(token)) {
            remove(token);
            return false
        } else {
            add(token);
            return true
        }
    }

    function $toString() {
        return elem.className
    }

    function item(index) {
        var tokens = getTokens();
        return tokens[index] || null
    }

    function getTokens() {
        var className = elem.className;

        return filter(className.split(" "), isTruthy)
    }

    function setTokens(list) {
        var length = list.length;

        elem.className = list.join(" ");
        classList.length = length;

        for (var i = 0; i < list.length; i++) {
            classList[i] = list[i];
        }

        delete list[length];
    }
}

function filter (arr, fn) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) ret.push(arr[i]);
    }
    return ret
}

function isTruthy(value) {
    return !!value
}

var _nodeResolve_empty = {};

var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _nodeResolve_empty
});

var require$$0 = getCjsExportFromNamespace(_nodeResolve_empty$1);

var hyperscript = createCommonjsModule(function (module) {
var w = typeof window === 'undefined' ? require$$0 : window;
var document = w.document;
var Text = w.Text;

function context () {

  var cleanupFuncs = [];

  function h() {
    var args = [].slice.call(arguments), e = null;
    function item (l) {
      var r;
      function parseClass (string) {
        // Our minimal parser doesn’t understand escaping CSS special
        // characters like `#`. Don’t use them. More reading:
        // https://mathiasbynens.be/notes/css-escapes .

        var m = browserSplit(string, /([\.#]?[^\s#.]+)/);
        if(/^\.|#/.test(m[1]))
          e = document.createElement('div');
        forEach(m, function (v) {
          var s = v.substring(1,v.length);
          if(!v) return
          if(!e)
            e = document.createElement(v);
          else if (v[0] === '.')
            classList(e).add(s);
          else if (v[0] === '#')
            e.setAttribute('id', s);
        });
      }

      if(l == null)
        ;
      else if('string' === typeof l) {
        if(!e)
          parseClass(l);
        else
          e.appendChild(r = document.createTextNode(l));
      }
      else if('number' === typeof l
        || 'boolean' === typeof l
        || l instanceof Date
        || l instanceof RegExp ) {
          e.appendChild(r = document.createTextNode(l.toString()));
      }
      //there might be a better way to handle this...
      else if (isArray(l))
        forEach(l, item);
      else if(isNode(l))
        e.appendChild(r = l);
      else if(l instanceof Text)
        e.appendChild(r = l);
      else if ('object' === typeof l) {
        for (var k in l) {
          if('function' === typeof l[k]) {
            if(/^on\w+/.test(k)) {
              (function (k, l) { // capture k, l in the closure
                if (e.addEventListener){
                  e.addEventListener(k.substring(2), l[k], false);
                  cleanupFuncs.push(function(){
                    e.removeEventListener(k.substring(2), l[k], false);
                  });
                }else {
                  e.attachEvent(k, l[k]);
                  cleanupFuncs.push(function(){
                    e.detachEvent(k, l[k]);
                  });
                }
              })(k, l);
            } else {
              // observable
              e[k] = l[k]();
              cleanupFuncs.push(l[k](function (v) {
                e[k] = v;
              }));
            }
          }
          else if(k === 'style') {
            if('string' === typeof l[k]) {
              e.style.cssText = l[k];
            }else {
              for (var s in l[k]) (function(s, v) {
                if('function' === typeof v) {
                  // observable
                  e.style.setProperty(s, v());
                  cleanupFuncs.push(v(function (val) {
                    e.style.setProperty(s, val);
                  }));
                } else
                  var match = l[k][s].match(/(.*)\W+!important\W*$/);
                  if (match) {
                    e.style.setProperty(s, match[1], 'important');
                  } else {
                    e.style.setProperty(s, l[k][s]);
                  }
              })(s, l[k][s]);
            }
          } else if(k === 'attrs') {
            for (var v in l[k]) {
              e.setAttribute(v, l[k][v]);
            }
          }
          else if (k.substr(0, 5) === "data-") {
            e.setAttribute(k, l[k]);
          } else {
            e[k] = l[k];
          }
        }
      } else if ('function' === typeof l) {
        //assume it's an observable!
        var v = l();
        e.appendChild(r = isNode(v) ? v : document.createTextNode(v));

        cleanupFuncs.push(l(function (v) {
          if(isNode(v) && r.parentElement)
            r.parentElement.replaceChild(v, r), r = v;
          else
            r.textContent = v;
        }));
      }

      return r
    }
    while(args.length)
      item(args.shift());

    return e
  }

  h.cleanup = function () {
    for (var i = 0; i < cleanupFuncs.length; i++){
      cleanupFuncs[i]();
    }
    cleanupFuncs.length = 0;
  };

  return h
}

var h = module.exports = context();
h.context = context;

function isNode (el) {
  return el && el.nodeName && el.nodeType
}

function forEach (arr, fn) {
  if (arr.forEach) return arr.forEach(fn)
  for (var i = 0; i < arr.length; i++) fn(arr[i], i);
}

function isArray (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]'
}
});

var baseUrl = 'https://docs.sanity.io/help/';

var generateHelpUrl = function generateHelpUrl(slug) {
  return baseUrl + slug
};

var enc = encodeURIComponent;
var materializeError = "You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(generateHelpUrl('block-content-image-materializing'));

var getQueryString = function getQueryString(options) {
  var query = options.imageOptions;
  var keys = Object.keys(query);

  if (!keys.length) {
    return '';
  }

  var params = keys.map(function (key) {
    return "".concat(enc(key), "=").concat(enc(query[key]));
  });
  return "?".concat(params.join('&'));
};

var buildUrl = function buildUrl(props) {
  var node = props.node,
      options = props.options;
  var projectId = options.projectId,
      dataset = options.dataset;
  var asset = node.asset;

  if (!asset) {
    throw new Error('Image does not have required `asset` property');
  }

  if (asset.url) {
    return asset.url + getQueryString(options);
  }

  if (!projectId || !dataset) {
    throw new Error(materializeError);
  }

  var ref = asset._ref;

  if (!ref) {
    throw new Error('Invalid image reference in block, no `_ref` found on `asset`');
  }

  return imageUrl_umd(objectAssign({
    projectId: projectId,
    dataset: dataset
  }, options.imageOptions || {})).image(node).toString();
};

var getImageUrl = buildUrl;

var defaultMarks = ['strong', 'em', 'code', 'underline', 'strike-through'];

var buildMarksTree = function buildMarksTree(block) {
  var children = block.children,
      markDefs = block.markDefs;

  if (!children || !children.length) {
    return [];
  }

  var sortedMarks = children.map(sortMarksByOccurences);
  var rootNode = {
    _type: 'span',
    children: []
  };
  var nodeStack = [rootNode];
  children.forEach(function (span, i) {
    var marksNeeded = sortedMarks[i];

    if (!marksNeeded) {
      var lastNode = nodeStack[nodeStack.length - 1];
      lastNode.children.push(span);
      return;
    }

    var pos = 1; // Start at position one. Root is always plain and should never be removed. (?)

    if (nodeStack.length > 1) {
      for (pos; pos < nodeStack.length; pos++) {
        var mark = nodeStack[pos].markKey;
        var index = marksNeeded.indexOf(mark); // eslint-disable-next-line max-depth

        if (index === -1) {
          break;
        }

        marksNeeded.splice(index, 1);
      }
    } // Keep from beginning to first miss


    nodeStack = nodeStack.slice(0, pos); // Add needed nodes

    var currentNode = findLastParentNode(nodeStack);
    marksNeeded.forEach(function (mark) {
      var node = {
        _type: 'span',
        _key: span._key,
        children: [],
        mark: markDefs.find(function (def) {
          return def._key === mark;
        }) || mark,
        markKey: mark
      };
      currentNode.children.push(node);
      nodeStack.push(node);
      currentNode = node;
    }); // Split at newlines to make individual line chunks, but keep newline
    // characters as individual elements in the array. We use these characters
    // in the span serializer to trigger hard-break rendering

    if (isTextSpan(span)) {
      var lines = span.text.split('\n');

      for (var line = lines.length; line-- > 1;) {
        lines.splice(line, 0, '\n');
      }

      currentNode.children = currentNode.children.concat(lines);
    } else {
      currentNode.children = currentNode.children.concat(span);
    }
  });
  return rootNode.children;
}; // We want to sort all the marks of all the spans in the following order:
// 1. Marks that are shared amongst the most adjacent siblings
// 2. Non-default marks (links, custom metadata)
// 3. Built-in, plain marks (bold, emphasis, code etc)


function sortMarksByOccurences(span, i, spans) {
  if (!span.marks || span.marks.length === 0) {
    return span.marks || [];
  }

  var markOccurences = span.marks.reduce(function (occurences, mark) {
    occurences[mark] = occurences[mark] ? occurences[mark] + 1 : 1;

    for (var siblingIndex = i + 1; siblingIndex < spans.length; siblingIndex++) {
      var sibling = spans[siblingIndex];

      if (sibling.marks && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) {
        occurences[mark]++;
      } else {
        break;
      }
    }

    return occurences;
  }, {});
  var sortByOccurence = sortMarks.bind(null, markOccurences); // Slicing because sort() mutates the input

  return span.marks.slice().sort(sortByOccurence);
}

function sortMarks(occurences, markA, markB) {
  var aOccurences = occurences[markA] || 0;
  var bOccurences = occurences[markB] || 0;

  if (aOccurences !== bOccurences) {
    return bOccurences - aOccurences;
  }

  var aDefaultPos = defaultMarks.indexOf(markA);
  var bDefaultPos = defaultMarks.indexOf(markB); // Sort default marks last

  if (aDefaultPos !== bDefaultPos) {
    return aDefaultPos - bDefaultPos;
  } // Sort other marks simply by key


  if (markA < markB) {
    return -1;
  } else if (markA > markB) {
    return 1;
  }

  return 0;
}

function isTextSpan(node) {
  return node._type === 'span' && typeof node.text === 'string' && (Array.isArray(node.marks) || typeof node.marks === 'undefined');
}

function findLastParentNode(nodes) {
  for (var i = nodes.length - 1; i >= 0; i--) {
    var node = nodes[i];

    if (node._type === 'span' && node.children) {
      return node;
    }
  }

  return undefined;
}

var buildMarksTree_1 = buildMarksTree;

/* eslint-disable max-depth, complexity */


function nestLists(blocks) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';
  var tree = [];
  var currentList;

  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];

    if (!isListBlock(block)) {
      tree.push(block);
      currentList = null;
      continue;
    } // Start of a new list?


    if (!currentList) {
      currentList = listFromBlock(block);
      tree.push(currentList);
      continue;
    } // New list item within same list?


    if (blockMatchesList(block, currentList)) {
      currentList.children.push(block);
      continue;
    } // Different list props, are we going deeper?


    if (block.level > currentList.level) {
      var newList = listFromBlock(block);

      if (mode === 'html') {
        // Because HTML is kinda weird, nested lists needs to be nested within list items
        // So while you would think that we could populate the parent list with a new sub-list,
        // We actually have to target the last list element (child) of the parent.
        // However, at this point we need to be very careful - simply pushing to the list of children
        // will mutate the input, and we don't want to blindly clone the entire tree.
        // Clone the last child while adding our new list as the last child of it
        var lastListItem = lastChild(currentList);
        var newLastChild = objectAssign({}, lastListItem, {
          children: lastListItem.children.concat(newList)
        }); // Swap the last child

        currentList.children[currentList.children.length - 1] = newLastChild;
      } else {
        currentList.children.push(newList);
      } // Set the newly created, deeper list as the current


      currentList = newList;
      continue;
    } // Different list props, are we going back up the tree?


    if (block.level < currentList.level) {
      // Current list has ended, and we need to hook up with a parent of the same level and type
      var match = findListMatching(tree[tree.length - 1], block);

      if (match) {
        currentList = match;
        currentList.children.push(block);
        continue;
      } // Similar parent can't be found, assume new list


      currentList = listFromBlock(block);
      tree.push(currentList);
      continue;
    } // Different list props, different list style?


    if (block.listItem !== currentList.listItem) {
      var _match = findListMatching(tree[tree.length - 1], {
        level: block.level
      });

      if (_match && _match.listItem === block.listItem) {
        currentList = _match;
        currentList.children.push(block);
        continue;
      } else {
        currentList = listFromBlock(block);
        tree.push(currentList);
        continue;
      }
    } // eslint-disable-next-line no-console


    console.warn('Unknown state encountered for block', block);
    tree.push(block);
  }

  return tree;
}

function isListBlock(block) {
  return Boolean(block.listItem);
}

function blockMatchesList(block, list) {
  return block.level === list.level && block.listItem === list.listItem;
}

function listFromBlock(block) {
  return {
    _type: 'list',
    _key: "".concat(block._key, "-parent"),
    level: block.level,
    listItem: block.listItem,
    children: [block]
  };
}

function lastChild(block) {
  return block.children && block.children[block.children.length - 1];
}

function findListMatching(rootNode, matching) {
  var filterOnType = typeof matching.listItem === 'string';

  if (rootNode._type === 'list' && rootNode.level === matching.level && filterOnType && rootNode.listItem === matching.listItem) {
    return rootNode;
  }

  var node = lastChild(rootNode);

  if (!node) {
    return false;
  }

  return findListMatching(node, matching);
}

var nestLists_1 = nestLists;

var generateKeys = function (blocks) {
  return blocks.map(function (block) {
    if (block._key) {
      return block;
    }

    return objectAssign({
      _key: getStaticKey(block)
    }, block);
  });
};

function getStaticKey(item) {
  return checksum(JSON.stringify(item)).toString(36).replace(/[^A-Za-z0-9]/g, '');
}
/* eslint-disable no-bitwise */


function checksum(str) {
  var hash = 0;
  var strlen = str.length;

  if (strlen === 0) {
    return hash;
  }

  for (var i = 0; i < strlen; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash &= hash; // Convert to 32bit integer
  }

  return hash;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var isDefined$1 = function isDefined(val) {
  return typeof val !== 'undefined';
}; // Recursively merge/replace default serializers with user-specified serializers


var mergeSerializers = function mergeSerializers(defaultSerializers, userSerializers) {
  return Object.keys(defaultSerializers).reduce(function (acc, key) {
    var type = _typeof(defaultSerializers[key]);

    if (type === 'function') {
      acc[key] = isDefined$1(userSerializers[key]) ? userSerializers[key] : defaultSerializers[key];
    } else if (type === 'object') {
      acc[key] = objectAssign({}, defaultSerializers[key], userSerializers[key]);
    } else {
      acc[key] = typeof userSerializers[key] === 'undefined' ? defaultSerializers[key] : userSerializers[key];
    }

    return acc;
  }, {});
};

// Properties to extract from props and pass to serializers as options


var optionProps = ['projectId', 'dataset', 'imageOptions'];

var isDefined = function isDefined(val) {
  return typeof val !== 'undefined';
};

var defaults = {
  imageOptions: {}
};

function blocksToNodes(h, properties, defaultSerializers, serializeSpan) {
  var props = objectAssign({}, defaults, properties);
  var rawBlocks = Array.isArray(props.blocks) ? props.blocks : [props.blocks];
  var keyedBlocks = generateKeys(rawBlocks);
  var blocks = nestLists_1(keyedBlocks, props.listNestMode);
  var serializers = mergeSerializers(defaultSerializers, props.serializers || {});
  var options = optionProps.reduce(function (opts, key) {
    var value = props[key];

    if (isDefined(value)) {
      opts[key] = value;
    }

    return opts;
  }, {});

  function serializeNode(node, index, siblings, isInline) {
    if (isList(node)) {
      return serializeList(node);
    }

    if (isListItem(node)) {
      return serializeListItem(node, findListItemIndex(node, siblings));
    }

    if (isSpan(node)) {
      return serializeSpan(node, serializers, index, {
        serializeNode: serializeNode
      });
    }

    return serializeBlock(node, index, isInline);
  }

  function findListItemIndex(node, siblings) {
    var index = 0;

    for (var i = 0; i < siblings.length; i++) {
      if (siblings[i] === node) {
        return index;
      }

      if (!isListItem(siblings[i])) {
        continue;
      }

      index++;
    }

    return index;
  }

  function serializeBlock(block, index, isInline) {
    var tree = buildMarksTree_1(block);
    var children = tree.map(function (node, i, siblings) {
      return serializeNode(node, i, siblings, true);
    });
    var blockProps = {
      key: block._key || "block-".concat(index),
      node: block,
      isInline: isInline,
      serializers: serializers,
      options: options
    };
    return h(serializers.block, blockProps, children);
  }

  function serializeListItem(block, index) {
    var key = block._key;
    var tree = buildMarksTree_1(block);
    var children = tree.map(serializeNode);
    return h(serializers.listItem, {
      node: block,
      serializers: serializers,
      index: index,
      key: key,
      options: options
    }, children);
  }

  function serializeList(list) {
    var type = list.listItem;
    var level = list.level;
    var key = list._key;
    var children = list.children.map(serializeNode);
    return h(serializers.list, {
      key: key,
      level: level,
      type: type,
      options: options
    }, children);
  } // Default to false, so `undefined` will evaluate to the default here


  var renderContainerOnSingleChild = Boolean(props.renderContainerOnSingleChild);
  var nodes = blocks.map(serializeNode);

  if (renderContainerOnSingleChild || nodes.length > 1) {
    var containerProps = props.className ? {
      className: props.className
    } : {};
    return h(serializers.container, containerProps, nodes);
  }

  if (nodes[0]) {
    return nodes[0];
  }

  return typeof serializers.empty === 'function' ? h(serializers.empty) : serializers.empty;
}

function isList(block) {
  return block._type === 'list' && block.listItem;
}

function isListItem(block) {
  return block._type === 'block' && block.listItem;
}

function isSpan(block) {
  return typeof block === 'string' || block.marks || block._type === 'span';
}

var blocksToNodes_1 = blocksToNodes;

var serializers = function (h, serializerOpts) {
  var serializeOptions = serializerOpts || {
    useDashedStyles: false // Low-level block serializer

  };

  function BlockSerializer(props) {
    var node = props.node,
        serializers = props.serializers,
        options = props.options,
        isInline = props.isInline,
        children = props.children;
    var blockType = node._type;
    var serializer = serializers.types[blockType];

    if (!serializer) {
      throw new Error("Unknown block type \"".concat(blockType, "\", please specify a serializer for it in the `serializers.types` prop"));
    }

    return h(serializer, {
      node: node,
      options: options,
      isInline: isInline
    }, children);
  } // Low-level span serializer


  function SpanSerializer(props) {
    var _props$node = props.node,
        mark = _props$node.mark,
        children = _props$node.children;
    var isPlain = typeof mark === 'string';
    var markType = isPlain ? mark : mark._type;
    var serializer = props.serializers.marks[markType];

    if (!serializer) {
      // @todo Revert back to throwing errors?
      // eslint-disable-next-line no-console
      console.warn("Unknown mark type \"".concat(markType, "\", please specify a serializer for it in the `serializers.marks` prop"));
      return h(props.serializers.markFallback, null, children);
    }

    return h(serializer, props.node, children);
  } // Low-level list serializer


  function ListSerializer(props) {
    var tag = props.type === 'bullet' ? 'ul' : 'ol';
    return h(tag, null, props.children);
  } // Low-level list item serializer


  function ListItemSerializer(props) {
    var children = !props.node.style || props.node.style === 'normal' ? // Don't wrap plain text in paragraphs inside of a list item
    props.children : // But wrap any other style in whatever the block serializer says to use
    h(props.serializers.types.block, props, props.children);
    return h('li', null, children);
  } // Renderer of an actual block of type `block`. Confusing, we know.


  function BlockTypeSerializer(props) {
    var style = props.node.style || 'normal';

    if (/^h\d/.test(style)) {
      return h(style, null, props.children);
    }

    return style === 'blockquote' ? h('blockquote', null, props.children) : h('p', null, props.children);
  } // Serializers for things that can be directly attributed to a tag without any props
  // We use partial application to do this, passing the tag name as the first argument


  function RawMarkSerializer(tag, props) {
    return h(tag, null, props.children);
  }

  function UnderlineSerializer(props) {
    var style = serializeOptions.useDashedStyles ? {
      'text-decoration': 'underline'
    } : {
      textDecoration: 'underline'
    };
    return h('span', {
      style: style
    }, props.children);
  }

  function StrikeThroughSerializer(props) {
    return h('del', null, props.children);
  }

  function LinkSerializer(props) {
    return h('a', {
      href: props.mark.href
    }, props.children);
  }

  function ImageSerializer(props) {
    if (!props.node.asset) {
      return null;
    }

    var img = h('img', {
      src: getImageUrl(props)
    });
    return props.isInline ? img : h('figure', null, img);
  } // Serializer that recursively calls itself, producing a hyperscript tree of spans


  function serializeSpan(span, serializers, index, options) {
    if (span === '\n' && serializers.hardBreak) {
      return h(serializers.hardBreak, {
        key: "hb-".concat(index)
      });
    }

    if (typeof span === 'string') {
      return serializers.text ? h(serializers.text, {
        key: "text-".concat(index)
      }, span) : span;
    }

    var children;

    if (span.children) {
      children = {
        children: span.children.map(function (child, i) {
          return options.serializeNode(child, i, span.children, true);
        })
      };
    }

    var serializedNode = objectAssign({}, span, children);
    return h(serializers.span, {
      key: span._key || "span-".concat(index),
      node: serializedNode,
      serializers: serializers
    });
  }

  var HardBreakSerializer = function HardBreakSerializer() {
    return h('br');
  };

  var defaultMarkSerializers = {
    strong: RawMarkSerializer.bind(null, 'strong'),
    em: RawMarkSerializer.bind(null, 'em'),
    code: RawMarkSerializer.bind(null, 'code'),
    underline: UnderlineSerializer,
    'strike-through': StrikeThroughSerializer,
    link: LinkSerializer
  };
  var defaultSerializers = {
    // Common overrides
    types: {
      block: BlockTypeSerializer,
      image: ImageSerializer
    },
    marks: defaultMarkSerializers,
    // Less common overrides
    list: ListSerializer,
    listItem: ListItemSerializer,
    block: BlockSerializer,
    span: SpanSerializer,
    hardBreak: HardBreakSerializer,
    // Container element
    container: 'div',
    // When we can't resolve the mark properly, use this renderer as the container
    markFallback: 'span',
    // Allow overriding text renderer, but leave undefined to just use plain strings by default
    text: undefined,
    // Empty nodes (React uses null, hyperscript with empty strings)
    empty: ''
  };
  return {
    defaultSerializers: defaultSerializers,
    serializeSpan: serializeSpan
  };
};

var renderNode = function renderNode(serializer, properties, children) {
  var props = properties || {};

  if (typeof serializer === 'function') {
    return serializer(objectAssign({}, props, {
      children: children
    }));
  }

  var tag = serializer;
  var childNodes = props.children || children;
  return hyperscript(tag, props, childNodes);
};

var _getSerializers = serializers(renderNode, {
  useDashedStyles: true
}),
    defaultSerializers = _getSerializers.defaultSerializers,
    serializeSpan = _getSerializers.serializeSpan;

var blockContentToHyperscript = function blockContentToHyperscript(options) {
  return blocksToNodes_1(renderNode, options, defaultSerializers, serializeSpan);
}; // Expose default serializers to the user


blockContentToHyperscript.defaultSerializers = defaultSerializers; // Expose logic for building image URLs from an image reference/node

blockContentToHyperscript.getImageUrl = getImageUrl; // Expose node renderer

blockContentToHyperscript.renderNode = renderNode;
var lib = blockContentToHyperscript;

var h = lib.renderNode;
var blocksToHtml = function blocksToHtml(options) {
  var rootNode = lib(options);
  return rootNode.outerHTML || rootNode;
};

blocksToHtml.defaultSerializers = lib.defaultSerializers;
blocksToHtml.getImageUrl = lib.getImageUrl;
blocksToHtml.renderNode = h;
blocksToHtml.h = h;

var blocksToHtml_1 = blocksToHtml;

export { blocksToHtml_1 as b };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tzVG9IdG1sLmQzYjExMWVjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1zcGxpdC9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pbmRleG9mL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLWxpc3QvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHlwZXJzY3JpcHQvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNhbml0eS9nZW5lcmF0ZS1oZWxwLXVybC9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvbGliL2dldEltYWdlVXJsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvYmxvY2stY29udGVudC10by1oeXBlcnNjcmlwdC9saWIvYnVpbGRNYXJrc1RyZWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2xpYi9uZXN0TGlzdHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2xpYi9nZW5lcmF0ZUtleXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh5cGVyc2NyaXB0L2xpYi9tZXJnZVNlcmlhbGl6ZXJzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvYmxvY2stY29udGVudC10by1oeXBlcnNjcmlwdC9saWIvYmxvY2tzVG9Ob2Rlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHlwZXJzY3JpcHQvbGliL3NlcmlhbGl6ZXJzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvYmxvY2stY29udGVudC10by1oeXBlcnNjcmlwdC9saWIvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHNhbml0eS9ibG9jay1jb250ZW50LXRvLWh0bWwvbGliL2Jsb2Nrc1RvSHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENyb3NzLUJyb3dzZXIgU3BsaXQgMS4xLjFcbiAqIENvcHlyaWdodCAyMDA3LTIwMTIgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+XG4gKiBBdmFpbGFibGUgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBFQ01BU2NyaXB0IGNvbXBsaWFudCwgdW5pZm9ybSBjcm9zcy1icm93c2VyIHNwbGl0IG1ldGhvZFxuICovXG5cbi8qKlxuICogU3BsaXRzIGEgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyB1c2luZyBhIHJlZ2V4IG9yIHN0cmluZyBzZXBhcmF0b3IuIE1hdGNoZXMgb2YgdGhlXG4gKiBzZXBhcmF0b3IgYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0IGFycmF5LiBIb3dldmVyLCBpZiBgc2VwYXJhdG9yYCBpcyBhIHJlZ2V4IHRoYXQgY29udGFpbnNcbiAqIGNhcHR1cmluZyBncm91cHMsIGJhY2tyZWZlcmVuY2VzIGFyZSBzcGxpY2VkIGludG8gdGhlIHJlc3VsdCBlYWNoIHRpbWUgYHNlcGFyYXRvcmAgaXMgbWF0Y2hlZC5cbiAqIEZpeGVzIGJyb3dzZXIgYnVncyBjb21wYXJlZCB0byB0aGUgbmF0aXZlIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBhbmQgY2FuIGJlIHVzZWQgcmVsaWFibHlcbiAqIGNyb3NzLWJyb3dzZXIuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFN0cmluZyB0byBzcGxpdC5cbiAqIEBwYXJhbSB7UmVnRXhwfFN0cmluZ30gc2VwYXJhdG9yIFJlZ2V4IG9yIHN0cmluZyB0byB1c2UgZm9yIHNlcGFyYXRpbmcgdGhlIHN0cmluZy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbGltaXRdIE1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRvIGluY2x1ZGUgaW4gdGhlIHJlc3VsdCBhcnJheS5cbiAqIEByZXR1cm5zIHtBcnJheX0gQXJyYXkgb2Ygc3Vic3RyaW5ncy5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQmFzaWMgdXNlXG4gKiBzcGxpdCgnYSBiIGMgZCcsICcgJyk7XG4gKiAvLyAtPiBbJ2EnLCAnYicsICdjJywgJ2QnXVxuICpcbiAqIC8vIFdpdGggbGltaXRcbiAqIHNwbGl0KCdhIGIgYyBkJywgJyAnLCAyKTtcbiAqIC8vIC0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBCYWNrcmVmZXJlbmNlcyBpbiByZXN1bHQgYXJyYXlcbiAqIHNwbGl0KCcuLndvcmQxIHdvcmQyLi4nLCAvKFthLXpdKykoXFxkKykvaSk7XG4gKiAvLyAtPiBbJy4uJywgJ3dvcmQnLCAnMScsICcgJywgJ3dvcmQnLCAnMicsICcuLiddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIHNwbGl0KHVuZGVmKSB7XG5cbiAgdmFyIG5hdGl2ZVNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdCxcbiAgICBjb21wbGlhbnRFeGVjTnBjZyA9IC8oKT8/Ly5leGVjKFwiXCIpWzFdID09PSB1bmRlZixcbiAgICAvLyBOUENHOiBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgIHNlbGY7XG5cbiAgc2VsZiA9IGZ1bmN0aW9uKHN0ciwgc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgYG5hdGl2ZVNwbGl0YFxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc2VwYXJhdG9yKSAhPT0gXCJbb2JqZWN0IFJlZ0V4cF1cIikge1xuICAgICAgcmV0dXJuIG5hdGl2ZVNwbGl0LmNhbGwoc3RyLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9XG4gICAgdmFyIG91dHB1dCA9IFtdLFxuICAgICAgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyBcImlcIiA6IFwiXCIpICsgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyBcIm1cIiA6IFwiXCIpICsgKHNlcGFyYXRvci5leHRlbmRlZCA/IFwieFwiIDogXCJcIikgKyAvLyBQcm9wb3NlZCBmb3IgRVM2XG4gICAgICAoc2VwYXJhdG9yLnN0aWNreSA/IFwieVwiIDogXCJcIiksXG4gICAgICAvLyBGaXJlZm94IDMrXG4gICAgICBsYXN0TGFzdEluZGV4ID0gMCxcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICBzZXBhcmF0b3IgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgXCJnXCIpLFxuICAgICAgc2VwYXJhdG9yMiwgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICBzdHIgKz0gXCJcIjsgLy8gVHlwZS1jb252ZXJ0XG4gICAgaWYgKCFjb21wbGlhbnRFeGVjTnBjZykge1xuICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG4gICAgICBzZXBhcmF0b3IyID0gbmV3IFJlZ0V4cChcIl5cIiArIHNlcGFyYXRvci5zb3VyY2UgKyBcIiQoPyFcXFxccylcIiwgZmxhZ3MpO1xuICAgIH1cbiAgICAvKiBWYWx1ZXMgZm9yIGBsaW1pdGAsIHBlciB0aGUgc3BlYzpcbiAgICAgKiBJZiB1bmRlZmluZWQ6IDQyOTQ5NjcyOTUgLy8gTWF0aC5wb3coMiwgMzIpIC0gMVxuICAgICAqIElmIDAsIEluZmluaXR5LCBvciBOYU46IDBcbiAgICAgKiBJZiBwb3NpdGl2ZSBudW1iZXI6IGxpbWl0ID0gTWF0aC5mbG9vcihsaW1pdCk7IGlmIChsaW1pdCA+IDQyOTQ5NjcyOTUpIGxpbWl0IC09IDQyOTQ5NjcyOTY7XG4gICAgICogSWYgbmVnYXRpdmUgbnVtYmVyOiA0Mjk0OTY3Mjk2IC0gTWF0aC5mbG9vcihNYXRoLmFicyhsaW1pdCkpXG4gICAgICogSWYgb3RoZXI6IFR5cGUtY29udmVydCwgdGhlbiB1c2UgdGhlIGFib3ZlIHJ1bGVzXG4gICAgICovXG4gICAgbGltaXQgPSBsaW1pdCA9PT0gdW5kZWYgPyAtMSA+Pj4gMCA6IC8vIE1hdGgucG93KDIsIDMyKSAtIDFcbiAgICBsaW1pdCA+Pj4gMDsgLy8gVG9VaW50MzIobGltaXQpXG4gICAgd2hpbGUgKG1hdGNoID0gc2VwYXJhdG9yLmV4ZWMoc3RyKSkge1xuICAgICAgLy8gYHNlcGFyYXRvci5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG4gICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgIG91dHB1dC5wdXNoKHN0ci5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3JcbiAgICAgICAgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBzXG4gICAgICAgIGlmICghY29tcGxpYW50RXhlY05wY2cgJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgICAgIG1hdGNoWzBdLnJlcGxhY2Uoc2VwYXJhdG9yMiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWYpIHtcbiAgICAgICAgICAgICAgICBtYXRjaFtpXSA9IHVuZGVmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPj0gbGltaXQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlcGFyYXRvci5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSB7XG4gICAgICAgIHNlcGFyYXRvci5sYXN0SW5kZXgrKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvci50ZXN0KFwiXCIpKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKFwiXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaChzdHIuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0Lmxlbmd0aCA+IGxpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIGxpbWl0KSA6IG91dHB1dDtcbiAgfTtcblxuICByZXR1cm4gc2VsZjtcbn0pKCk7XG4iLCJcbnZhciBpbmRleE9mID0gW10uaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChpbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07IiwiLy8gY29udGFpbnMsIGFkZCwgcmVtb3ZlLCB0b2dnbGVcbnZhciBpbmRleG9mID0gcmVxdWlyZSgnaW5kZXhvZicpXG5cbm1vZHVsZS5leHBvcnRzID0gQ2xhc3NMaXN0XG5cbmZ1bmN0aW9uIENsYXNzTGlzdChlbGVtKSB7XG4gICAgdmFyIGNsID0gZWxlbS5jbGFzc0xpc3RcblxuICAgIGlmIChjbCkge1xuICAgICAgICByZXR1cm4gY2xcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NMaXN0ID0ge1xuICAgICAgICBhZGQ6IGFkZFxuICAgICAgICAsIHJlbW92ZTogcmVtb3ZlXG4gICAgICAgICwgY29udGFpbnM6IGNvbnRhaW5zXG4gICAgICAgICwgdG9nZ2xlOiB0b2dnbGVcbiAgICAgICAgLCB0b1N0cmluZzogJHRvU3RyaW5nXG4gICAgICAgICwgbGVuZ3RoOiAwXG4gICAgICAgICwgaXRlbTogaXRlbVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc0xpc3RcblxuICAgIGZ1bmN0aW9uIGFkZCh0b2tlbikge1xuICAgICAgICB2YXIgbGlzdCA9IGdldFRva2VucygpXG4gICAgICAgIGlmIChpbmRleG9mKGxpc3QsIHRva2VuKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsaXN0LnB1c2godG9rZW4pXG4gICAgICAgIHNldFRva2VucyhsaXN0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSh0b2tlbikge1xuICAgICAgICB2YXIgbGlzdCA9IGdldFRva2VucygpXG4gICAgICAgICAgICAsIGluZGV4ID0gaW5kZXhvZihsaXN0LCB0b2tlbilcblxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICBzZXRUb2tlbnMobGlzdClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250YWlucyh0b2tlbikge1xuICAgICAgICByZXR1cm4gaW5kZXhvZihnZXRUb2tlbnMoKSwgdG9rZW4pID4gLTFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUodG9rZW4pIHtcbiAgICAgICAgaWYgKGNvbnRhaW5zKHRva2VuKSkge1xuICAgICAgICAgICAgcmVtb3ZlKHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGQodG9rZW4pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gZWxlbS5jbGFzc05hbWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpdGVtKGluZGV4KSB7XG4gICAgICAgIHZhciB0b2tlbnMgPSBnZXRUb2tlbnMoKVxuICAgICAgICByZXR1cm4gdG9rZW5zW2luZGV4XSB8fCBudWxsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9rZW5zKCkge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWVcblxuICAgICAgICByZXR1cm4gZmlsdGVyKGNsYXNzTmFtZS5zcGxpdChcIiBcIiksIGlzVHJ1dGh5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRva2VucyhsaXN0KSB7XG4gICAgICAgIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aFxuXG4gICAgICAgIGVsZW0uY2xhc3NOYW1lID0gbGlzdC5qb2luKFwiIFwiKVxuICAgICAgICBjbGFzc0xpc3QubGVuZ3RoID0gbGVuZ3RoXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjbGFzc0xpc3RbaV0gPSBsaXN0W2ldXG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgbGlzdFtsZW5ndGhdXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXIgKGFyciwgZm4pIHtcbiAgICB2YXIgcmV0ID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZm4oYXJyW2ldKSkgcmV0LnB1c2goYXJyW2ldKVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGlzVHJ1dGh5KHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWVcbn1cbiIsInZhciBzcGxpdCA9IHJlcXVpcmUoJ2Jyb3dzZXItc3BsaXQnKVxudmFyIENsYXNzTGlzdCA9IHJlcXVpcmUoJ2NsYXNzLWxpc3QnKVxuXG52YXIgdyA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnaHRtbC1lbGVtZW50JykgOiB3aW5kb3dcbnZhciBkb2N1bWVudCA9IHcuZG9jdW1lbnRcbnZhciBUZXh0ID0gdy5UZXh0XG5cbmZ1bmN0aW9uIGNvbnRleHQgKCkge1xuXG4gIHZhciBjbGVhbnVwRnVuY3MgPSBbXVxuXG4gIGZ1bmN0aW9uIGgoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIGUgPSBudWxsXG4gICAgZnVuY3Rpb24gaXRlbSAobCkge1xuICAgICAgdmFyIHJcbiAgICAgIGZ1bmN0aW9uIHBhcnNlQ2xhc3MgKHN0cmluZykge1xuICAgICAgICAvLyBPdXIgbWluaW1hbCBwYXJzZXIgZG9lc27igJl0IHVuZGVyc3RhbmQgZXNjYXBpbmcgQ1NTIHNwZWNpYWxcbiAgICAgICAgLy8gY2hhcmFjdGVycyBsaWtlIGAjYC4gRG9u4oCZdCB1c2UgdGhlbS4gTW9yZSByZWFkaW5nOlxuICAgICAgICAvLyBodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvY3NzLWVzY2FwZXMgLlxuXG4gICAgICAgIHZhciBtID0gc3BsaXQoc3RyaW5nLCAvKFtcXC4jXT9bXlxccyMuXSspLylcbiAgICAgICAgaWYoL15cXC58Iy8udGVzdChtWzFdKSlcbiAgICAgICAgICBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZm9yRWFjaChtLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHZhciBzID0gdi5zdWJzdHJpbmcoMSx2Lmxlbmd0aClcbiAgICAgICAgICBpZighdikgcmV0dXJuXG4gICAgICAgICAgaWYoIWUpXG4gICAgICAgICAgICBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2KVxuICAgICAgICAgIGVsc2UgaWYgKHZbMF0gPT09ICcuJylcbiAgICAgICAgICAgIENsYXNzTGlzdChlKS5hZGQocylcbiAgICAgICAgICBlbHNlIGlmICh2WzBdID09PSAnIycpXG4gICAgICAgICAgICBlLnNldEF0dHJpYnV0ZSgnaWQnLCBzKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZihsID09IG51bGwpXG4gICAgICAgIDtcbiAgICAgIGVsc2UgaWYoJ3N0cmluZycgPT09IHR5cGVvZiBsKSB7XG4gICAgICAgIGlmKCFlKVxuICAgICAgICAgIHBhcnNlQ2xhc3MobClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGUuYXBwZW5kQ2hpbGQociA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGwpKVxuICAgICAgfVxuICAgICAgZWxzZSBpZignbnVtYmVyJyA9PT0gdHlwZW9mIGxcbiAgICAgICAgfHwgJ2Jvb2xlYW4nID09PSB0eXBlb2YgbFxuICAgICAgICB8fCBsIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgICB8fCBsIGluc3RhbmNlb2YgUmVnRXhwICkge1xuICAgICAgICAgIGUuYXBwZW5kQ2hpbGQociA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGwudG9TdHJpbmcoKSkpXG4gICAgICB9XG4gICAgICAvL3RoZXJlIG1pZ2h0IGJlIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuICAgICAgZWxzZSBpZiAoaXNBcnJheShsKSlcbiAgICAgICAgZm9yRWFjaChsLCBpdGVtKVxuICAgICAgZWxzZSBpZihpc05vZGUobCkpXG4gICAgICAgIGUuYXBwZW5kQ2hpbGQociA9IGwpXG4gICAgICBlbHNlIGlmKGwgaW5zdGFuY2VvZiBUZXh0KVxuICAgICAgICBlLmFwcGVuZENoaWxkKHIgPSBsKVxuICAgICAgZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBsKSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gbCkge1xuICAgICAgICAgIGlmKCdmdW5jdGlvbicgPT09IHR5cGVvZiBsW2tdKSB7XG4gICAgICAgICAgICBpZigvXm9uXFx3Ky8udGVzdChrKSkge1xuICAgICAgICAgICAgICAoZnVuY3Rpb24gKGssIGwpIHsgLy8gY2FwdHVyZSBrLCBsIGluIHRoZSBjbG9zdXJlXG4gICAgICAgICAgICAgICAgaWYgKGUuYWRkRXZlbnRMaXN0ZW5lcil7XG4gICAgICAgICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoay5zdWJzdHJpbmcoMiksIGxba10sIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgY2xlYW51cEZ1bmNzLnB1c2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKGsuc3Vic3RyaW5nKDIpLCBsW2tdLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICBlLmF0dGFjaEV2ZW50KGssIGxba10pXG4gICAgICAgICAgICAgICAgICBjbGVhbnVwRnVuY3MucHVzaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBlLmRldGFjaEV2ZW50KGssIGxba10pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkoaywgbClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIG9ic2VydmFibGVcbiAgICAgICAgICAgICAgZVtrXSA9IGxba10oKVxuICAgICAgICAgICAgICBjbGVhbnVwRnVuY3MucHVzaChsW2tdKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgZVtrXSA9IHZcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoayA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgaWYoJ3N0cmluZycgPT09IHR5cGVvZiBsW2tdKSB7XG4gICAgICAgICAgICAgIGUuc3R5bGUuY3NzVGV4dCA9IGxba11cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIGxba10pIChmdW5jdGlvbihzLCB2KSB7XG4gICAgICAgICAgICAgICAgaWYoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHYpIHtcbiAgICAgICAgICAgICAgICAgIC8vIG9ic2VydmFibGVcbiAgICAgICAgICAgICAgICAgIGUuc3R5bGUuc2V0UHJvcGVydHkocywgdigpKVxuICAgICAgICAgICAgICAgICAgY2xlYW51cEZ1bmNzLnB1c2godihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUuc2V0UHJvcGVydHkocywgdmFsKVxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBsW2tdW3NdLm1hdGNoKC8oLiopXFxXKyFpbXBvcnRhbnRcXFcqJC8pO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUuc2V0UHJvcGVydHkocywgbWF0Y2hbMV0sICdpbXBvcnRhbnQnKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS5zZXRQcm9wZXJ0eShzLCBsW2tdW3NdKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KShzLCBsW2tdW3NdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZihrID09PSAnYXR0cnMnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB2IGluIGxba10pIHtcbiAgICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUodiwgbFtrXVt2XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoay5zdWJzdHIoMCwgNSkgPT09IFwiZGF0YS1cIikge1xuICAgICAgICAgICAgZS5zZXRBdHRyaWJ1dGUoaywgbFtrXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZVtrXSA9IGxba11cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGwpIHtcbiAgICAgICAgLy9hc3N1bWUgaXQncyBhbiBvYnNlcnZhYmxlIVxuICAgICAgICB2YXIgdiA9IGwoKVxuICAgICAgICBlLmFwcGVuZENoaWxkKHIgPSBpc05vZGUodikgPyB2IDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodikpXG5cbiAgICAgICAgY2xlYW51cEZ1bmNzLnB1c2gobChmdW5jdGlvbiAodikge1xuICAgICAgICAgIGlmKGlzTm9kZSh2KSAmJiByLnBhcmVudEVsZW1lbnQpXG4gICAgICAgICAgICByLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHYsIHIpLCByID0gdlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHIudGV4dENvbnRlbnQgPSB2XG4gICAgICAgIH0pKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gclxuICAgIH1cbiAgICB3aGlsZShhcmdzLmxlbmd0aClcbiAgICAgIGl0ZW0oYXJncy5zaGlmdCgpKVxuXG4gICAgcmV0dXJuIGVcbiAgfVxuXG4gIGguY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsZWFudXBGdW5jcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjbGVhbnVwRnVuY3NbaV0oKVxuICAgIH1cbiAgICBjbGVhbnVwRnVuY3MubGVuZ3RoID0gMFxuICB9XG5cbiAgcmV0dXJuIGhcbn1cblxudmFyIGggPSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRleHQoKVxuaC5jb250ZXh0ID0gY29udGV4dFxuXG5mdW5jdGlvbiBpc05vZGUgKGVsKSB7XG4gIHJldHVybiBlbCAmJiBlbC5ub2RlTmFtZSAmJiBlbC5ub2RlVHlwZVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoIChhcnIsIGZuKSB7XG4gIGlmIChhcnIuZm9yRWFjaCkgcmV0dXJuIGFyci5mb3JFYWNoKGZuKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgZm4oYXJyW2ldLCBpKVxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSdcbn1cblxuXG4iLCJ2YXIgYmFzZVVybCA9ICdodHRwczovL2RvY3Muc2FuaXR5LmlvL2hlbHAvJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdlbmVyYXRlSGVscFVybChzbHVnKSB7XG4gIHJldHVybiBiYXNlVXJsICsgc2x1Z1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZW5lcmF0ZUhlbHBVcmwgPSByZXF1aXJlKCdAc2FuaXR5L2dlbmVyYXRlLWhlbHAtdXJsJyk7XG5cbnZhciB1cmxCdWlsZGVyID0gcmVxdWlyZSgnQHNhbml0eS9pbWFnZS11cmwnKTtcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIGVuYyA9IGVuY29kZVVSSUNvbXBvbmVudDtcbnZhciBtYXRlcmlhbGl6ZUVycm9yID0gXCJZb3UgbXVzdCBlaXRoZXI6XFxuICAtIFBhc3MgYHByb2plY3RJZGAgYW5kIGBkYXRhc2V0YCB0byB0aGUgYmxvY2sgcmVuZGVyZXJcXG4gIC0gTWF0ZXJpYWxpemUgaW1hZ2VzIHRvIGluY2x1ZGUgdGhlIGB1cmxgIGZpZWxkLlxcblxcbkZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgXCIuY29uY2F0KGdlbmVyYXRlSGVscFVybCgnYmxvY2stY29udGVudC1pbWFnZS1tYXRlcmlhbGl6aW5nJykpO1xuXG52YXIgZ2V0UXVlcnlTdHJpbmcgPSBmdW5jdGlvbiBnZXRRdWVyeVN0cmluZyhvcHRpb25zKSB7XG4gIHZhciBxdWVyeSA9IG9wdGlvbnMuaW1hZ2VPcHRpb25zO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHF1ZXJ5KTtcblxuICBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IGtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoZW5jKGtleSksIFwiPVwiKS5jb25jYXQoZW5jKHF1ZXJ5W2tleV0pKTtcbiAgfSk7XG4gIHJldHVybiBcIj9cIi5jb25jYXQocGFyYW1zLmpvaW4oJyYnKSk7XG59O1xuXG52YXIgYnVpbGRVcmwgPSBmdW5jdGlvbiBidWlsZFVybChwcm9wcykge1xuICB2YXIgbm9kZSA9IHByb3BzLm5vZGUsXG4gICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcbiAgdmFyIHByb2plY3RJZCA9IG9wdGlvbnMucHJvamVjdElkLFxuICAgICAgZGF0YXNldCA9IG9wdGlvbnMuZGF0YXNldDtcbiAgdmFyIGFzc2V0ID0gbm9kZS5hc3NldDtcblxuICBpZiAoIWFzc2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbWFnZSBkb2VzIG5vdCBoYXZlIHJlcXVpcmVkIGBhc3NldGAgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmIChhc3NldC51cmwpIHtcbiAgICByZXR1cm4gYXNzZXQudXJsICsgZ2V0UXVlcnlTdHJpbmcob3B0aW9ucyk7XG4gIH1cblxuICBpZiAoIXByb2plY3RJZCB8fCAhZGF0YXNldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihtYXRlcmlhbGl6ZUVycm9yKTtcbiAgfVxuXG4gIHZhciByZWYgPSBhc3NldC5fcmVmO1xuXG4gIGlmICghcmVmKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGltYWdlIHJlZmVyZW5jZSBpbiBibG9jaywgbm8gYF9yZWZgIGZvdW5kIG9uIGBhc3NldGAnKTtcbiAgfVxuXG4gIHJldHVybiB1cmxCdWlsZGVyKG9iamVjdEFzc2lnbih7XG4gICAgcHJvamVjdElkOiBwcm9qZWN0SWQsXG4gICAgZGF0YXNldDogZGF0YXNldFxuICB9LCBvcHRpb25zLmltYWdlT3B0aW9ucyB8fCB7fSkpLmltYWdlKG5vZGUpLnRvU3RyaW5nKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1aWxkVXJsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0SW1hZ2VVcmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZWZhdWx0TWFya3MgPSBbJ3N0cm9uZycsICdlbScsICdjb2RlJywgJ3VuZGVybGluZScsICdzdHJpa2UtdGhyb3VnaCddO1xuXG52YXIgYnVpbGRNYXJrc1RyZWUgPSBmdW5jdGlvbiBidWlsZE1hcmtzVHJlZShibG9jaykge1xuICB2YXIgY2hpbGRyZW4gPSBibG9jay5jaGlsZHJlbixcbiAgICAgIG1hcmtEZWZzID0gYmxvY2subWFya0RlZnM7XG5cbiAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHNvcnRlZE1hcmtzID0gY2hpbGRyZW4ubWFwKHNvcnRNYXJrc0J5T2NjdXJlbmNlcyk7XG4gIHZhciByb290Tm9kZSA9IHtcbiAgICBfdHlwZTogJ3NwYW4nLFxuICAgIGNoaWxkcmVuOiBbXVxuICB9O1xuICB2YXIgbm9kZVN0YWNrID0gW3Jvb3ROb2RlXTtcbiAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoc3BhbiwgaSkge1xuICAgIHZhciBtYXJrc05lZWRlZCA9IHNvcnRlZE1hcmtzW2ldO1xuXG4gICAgaWYgKCFtYXJrc05lZWRlZCkge1xuICAgICAgdmFyIGxhc3ROb2RlID0gbm9kZVN0YWNrW25vZGVTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIGxhc3ROb2RlLmNoaWxkcmVuLnB1c2goc3Bhbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvcyA9IDE7IC8vIFN0YXJ0IGF0IHBvc2l0aW9uIG9uZS4gUm9vdCBpcyBhbHdheXMgcGxhaW4gYW5kIHNob3VsZCBuZXZlciBiZSByZW1vdmVkLiAoPylcblxuICAgIGlmIChub2RlU3RhY2subGVuZ3RoID4gMSkge1xuICAgICAgZm9yIChwb3M7IHBvcyA8IG5vZGVTdGFjay5sZW5ndGg7IHBvcysrKSB7XG4gICAgICAgIHZhciBtYXJrID0gbm9kZVN0YWNrW3Bvc10ubWFya0tleTtcbiAgICAgICAgdmFyIGluZGV4ID0gbWFya3NOZWVkZWQuaW5kZXhPZihtYXJrKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmtzTmVlZGVkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSAvLyBLZWVwIGZyb20gYmVnaW5uaW5nIHRvIGZpcnN0IG1pc3NcblxuXG4gICAgbm9kZVN0YWNrID0gbm9kZVN0YWNrLnNsaWNlKDAsIHBvcyk7IC8vIEFkZCBuZWVkZWQgbm9kZXNcblxuICAgIHZhciBjdXJyZW50Tm9kZSA9IGZpbmRMYXN0UGFyZW50Tm9kZShub2RlU3RhY2spO1xuICAgIG1hcmtzTmVlZGVkLmZvckVhY2goZnVuY3Rpb24gKG1hcmspIHtcbiAgICAgIHZhciBub2RlID0ge1xuICAgICAgICBfdHlwZTogJ3NwYW4nLFxuICAgICAgICBfa2V5OiBzcGFuLl9rZXksXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgbWFyazogbWFya0RlZnMuZmluZChmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZi5fa2V5ID09PSBtYXJrO1xuICAgICAgICB9KSB8fCBtYXJrLFxuICAgICAgICBtYXJrS2V5OiBtYXJrXG4gICAgICB9O1xuICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgIG5vZGVTdGFjay5wdXNoKG5vZGUpO1xuICAgICAgY3VycmVudE5vZGUgPSBub2RlO1xuICAgIH0pOyAvLyBTcGxpdCBhdCBuZXdsaW5lcyB0byBtYWtlIGluZGl2aWR1YWwgbGluZSBjaHVua3MsIGJ1dCBrZWVwIG5ld2xpbmVcbiAgICAvLyBjaGFyYWN0ZXJzIGFzIGluZGl2aWR1YWwgZWxlbWVudHMgaW4gdGhlIGFycmF5LiBXZSB1c2UgdGhlc2UgY2hhcmFjdGVyc1xuICAgIC8vIGluIHRoZSBzcGFuIHNlcmlhbGl6ZXIgdG8gdHJpZ2dlciBoYXJkLWJyZWFrIHJlbmRlcmluZ1xuXG4gICAgaWYgKGlzVGV4dFNwYW4oc3BhbikpIHtcbiAgICAgIHZhciBsaW5lcyA9IHNwYW4udGV4dC5zcGxpdCgnXFxuJyk7XG5cbiAgICAgIGZvciAodmFyIGxpbmUgPSBsaW5lcy5sZW5ndGg7IGxpbmUtLSA+IDE7KSB7XG4gICAgICAgIGxpbmVzLnNwbGljZShsaW5lLCAwLCAnXFxuJyk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuID0gY3VycmVudE5vZGUuY2hpbGRyZW4uY29uY2F0KGxpbmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW4gPSBjdXJyZW50Tm9kZS5jaGlsZHJlbi5jb25jYXQoc3Bhbik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJvb3ROb2RlLmNoaWxkcmVuO1xufTsgLy8gV2Ugd2FudCB0byBzb3J0IGFsbCB0aGUgbWFya3Mgb2YgYWxsIHRoZSBzcGFucyBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuLy8gMS4gTWFya3MgdGhhdCBhcmUgc2hhcmVkIGFtb25nc3QgdGhlIG1vc3QgYWRqYWNlbnQgc2libGluZ3Ncbi8vIDIuIE5vbi1kZWZhdWx0IG1hcmtzIChsaW5rcywgY3VzdG9tIG1ldGFkYXRhKVxuLy8gMy4gQnVpbHQtaW4sIHBsYWluIG1hcmtzIChib2xkLCBlbXBoYXNpcywgY29kZSBldGMpXG5cblxuZnVuY3Rpb24gc29ydE1hcmtzQnlPY2N1cmVuY2VzKHNwYW4sIGksIHNwYW5zKSB7XG4gIGlmICghc3Bhbi5tYXJrcyB8fCBzcGFuLm1hcmtzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBzcGFuLm1hcmtzIHx8IFtdO1xuICB9XG5cbiAgdmFyIG1hcmtPY2N1cmVuY2VzID0gc3Bhbi5tYXJrcy5yZWR1Y2UoZnVuY3Rpb24gKG9jY3VyZW5jZXMsIG1hcmspIHtcbiAgICBvY2N1cmVuY2VzW21hcmtdID0gb2NjdXJlbmNlc1ttYXJrXSA/IG9jY3VyZW5jZXNbbWFya10gKyAxIDogMTtcblxuICAgIGZvciAodmFyIHNpYmxpbmdJbmRleCA9IGkgKyAxOyBzaWJsaW5nSW5kZXggPCBzcGFucy5sZW5ndGg7IHNpYmxpbmdJbmRleCsrKSB7XG4gICAgICB2YXIgc2libGluZyA9IHNwYW5zW3NpYmxpbmdJbmRleF07XG5cbiAgICAgIGlmIChzaWJsaW5nLm1hcmtzICYmIEFycmF5LmlzQXJyYXkoc2libGluZy5tYXJrcykgJiYgc2libGluZy5tYXJrcy5pbmRleE9mKG1hcmspICE9PSAtMSkge1xuICAgICAgICBvY2N1cmVuY2VzW21hcmtdKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2NjdXJlbmNlcztcbiAgfSwge30pO1xuICB2YXIgc29ydEJ5T2NjdXJlbmNlID0gc29ydE1hcmtzLmJpbmQobnVsbCwgbWFya09jY3VyZW5jZXMpOyAvLyBTbGljaW5nIGJlY2F1c2Ugc29ydCgpIG11dGF0ZXMgdGhlIGlucHV0XG5cbiAgcmV0dXJuIHNwYW4ubWFya3Muc2xpY2UoKS5zb3J0KHNvcnRCeU9jY3VyZW5jZSk7XG59XG5cbmZ1bmN0aW9uIHNvcnRNYXJrcyhvY2N1cmVuY2VzLCBtYXJrQSwgbWFya0IpIHtcbiAgdmFyIGFPY2N1cmVuY2VzID0gb2NjdXJlbmNlc1ttYXJrQV0gfHwgMDtcbiAgdmFyIGJPY2N1cmVuY2VzID0gb2NjdXJlbmNlc1ttYXJrQl0gfHwgMDtcblxuICBpZiAoYU9jY3VyZW5jZXMgIT09IGJPY2N1cmVuY2VzKSB7XG4gICAgcmV0dXJuIGJPY2N1cmVuY2VzIC0gYU9jY3VyZW5jZXM7XG4gIH1cblxuICB2YXIgYURlZmF1bHRQb3MgPSBkZWZhdWx0TWFya3MuaW5kZXhPZihtYXJrQSk7XG4gIHZhciBiRGVmYXVsdFBvcyA9IGRlZmF1bHRNYXJrcy5pbmRleE9mKG1hcmtCKTsgLy8gU29ydCBkZWZhdWx0IG1hcmtzIGxhc3RcblxuICBpZiAoYURlZmF1bHRQb3MgIT09IGJEZWZhdWx0UG9zKSB7XG4gICAgcmV0dXJuIGFEZWZhdWx0UG9zIC0gYkRlZmF1bHRQb3M7XG4gIH0gLy8gU29ydCBvdGhlciBtYXJrcyBzaW1wbHkgYnkga2V5XG5cblxuICBpZiAobWFya0EgPCBtYXJrQikge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChtYXJrQSA+IG1hcmtCKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gaXNUZXh0U3Bhbihub2RlKSB7XG4gIHJldHVybiBub2RlLl90eXBlID09PSAnc3BhbicgJiYgdHlwZW9mIG5vZGUudGV4dCA9PT0gJ3N0cmluZycgJiYgKEFycmF5LmlzQXJyYXkobm9kZS5tYXJrcykgfHwgdHlwZW9mIG5vZGUubWFya3MgPT09ICd1bmRlZmluZWQnKTtcbn1cblxuZnVuY3Rpb24gZmluZExhc3RQYXJlbnROb2RlKG5vZGVzKSB7XG4gIGZvciAodmFyIGkgPSBub2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBub2RlID0gbm9kZXNbaV07XG5cbiAgICBpZiAobm9kZS5fdHlwZSA9PT0gJ3NwYW4nICYmIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGRNYXJrc1RyZWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idWlsZE1hcmtzVHJlZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbi8qIGVzbGludC1kaXNhYmxlIG1heC1kZXB0aCwgY29tcGxleGl0eSAqL1xuXG5cbmZ1bmN0aW9uIG5lc3RMaXN0cyhibG9ja3MpIHtcbiAgdmFyIG1vZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdodG1sJztcbiAgdmFyIHRyZWUgPSBbXTtcbiAgdmFyIGN1cnJlbnRMaXN0O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJsb2NrID0gYmxvY2tzW2ldO1xuXG4gICAgaWYgKCFpc0xpc3RCbG9jayhibG9jaykpIHtcbiAgICAgIHRyZWUucHVzaChibG9jayk7XG4gICAgICBjdXJyZW50TGlzdCA9IG51bGw7XG4gICAgICBjb250aW51ZTtcbiAgICB9IC8vIFN0YXJ0IG9mIGEgbmV3IGxpc3Q/XG5cblxuICAgIGlmICghY3VycmVudExpc3QpIHtcbiAgICAgIGN1cnJlbnRMaXN0ID0gbGlzdEZyb21CbG9jayhibG9jayk7XG4gICAgICB0cmVlLnB1c2goY3VycmVudExpc3QpO1xuICAgICAgY29udGludWU7XG4gICAgfSAvLyBOZXcgbGlzdCBpdGVtIHdpdGhpbiBzYW1lIGxpc3Q/XG5cblxuICAgIGlmIChibG9ja01hdGNoZXNMaXN0KGJsb2NrLCBjdXJyZW50TGlzdCkpIHtcbiAgICAgIGN1cnJlbnRMaXN0LmNoaWxkcmVuLnB1c2goYmxvY2spO1xuICAgICAgY29udGludWU7XG4gICAgfSAvLyBEaWZmZXJlbnQgbGlzdCBwcm9wcywgYXJlIHdlIGdvaW5nIGRlZXBlcj9cblxuXG4gICAgaWYgKGJsb2NrLmxldmVsID4gY3VycmVudExpc3QubGV2ZWwpIHtcbiAgICAgIHZhciBuZXdMaXN0ID0gbGlzdEZyb21CbG9jayhibG9jayk7XG5cbiAgICAgIGlmIChtb2RlID09PSAnaHRtbCcpIHtcbiAgICAgICAgLy8gQmVjYXVzZSBIVE1MIGlzIGtpbmRhIHdlaXJkLCBuZXN0ZWQgbGlzdHMgbmVlZHMgdG8gYmUgbmVzdGVkIHdpdGhpbiBsaXN0IGl0ZW1zXG4gICAgICAgIC8vIFNvIHdoaWxlIHlvdSB3b3VsZCB0aGluayB0aGF0IHdlIGNvdWxkIHBvcHVsYXRlIHRoZSBwYXJlbnQgbGlzdCB3aXRoIGEgbmV3IHN1Yi1saXN0LFxuICAgICAgICAvLyBXZSBhY3R1YWxseSBoYXZlIHRvIHRhcmdldCB0aGUgbGFzdCBsaXN0IGVsZW1lbnQgKGNoaWxkKSBvZiB0aGUgcGFyZW50LlxuICAgICAgICAvLyBIb3dldmVyLCBhdCB0aGlzIHBvaW50IHdlIG5lZWQgdG8gYmUgdmVyeSBjYXJlZnVsIC0gc2ltcGx5IHB1c2hpbmcgdG8gdGhlIGxpc3Qgb2YgY2hpbGRyZW5cbiAgICAgICAgLy8gd2lsbCBtdXRhdGUgdGhlIGlucHV0LCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBibGluZGx5IGNsb25lIHRoZSBlbnRpcmUgdHJlZS5cbiAgICAgICAgLy8gQ2xvbmUgdGhlIGxhc3QgY2hpbGQgd2hpbGUgYWRkaW5nIG91ciBuZXcgbGlzdCBhcyB0aGUgbGFzdCBjaGlsZCBvZiBpdFxuICAgICAgICB2YXIgbGFzdExpc3RJdGVtID0gbGFzdENoaWxkKGN1cnJlbnRMaXN0KTtcbiAgICAgICAgdmFyIG5ld0xhc3RDaGlsZCA9IG9iamVjdEFzc2lnbih7fSwgbGFzdExpc3RJdGVtLCB7XG4gICAgICAgICAgY2hpbGRyZW46IGxhc3RMaXN0SXRlbS5jaGlsZHJlbi5jb25jYXQobmV3TGlzdClcbiAgICAgICAgfSk7IC8vIFN3YXAgdGhlIGxhc3QgY2hpbGRcblxuICAgICAgICBjdXJyZW50TGlzdC5jaGlsZHJlbltjdXJyZW50TGlzdC5jaGlsZHJlbi5sZW5ndGggLSAxXSA9IG5ld0xhc3RDaGlsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRMaXN0LmNoaWxkcmVuLnB1c2gobmV3TGlzdCk7XG4gICAgICB9IC8vIFNldCB0aGUgbmV3bHkgY3JlYXRlZCwgZGVlcGVyIGxpc3QgYXMgdGhlIGN1cnJlbnRcblxuXG4gICAgICBjdXJyZW50TGlzdCA9IG5ld0xpc3Q7XG4gICAgICBjb250aW51ZTtcbiAgICB9IC8vIERpZmZlcmVudCBsaXN0IHByb3BzLCBhcmUgd2UgZ29pbmcgYmFjayB1cCB0aGUgdHJlZT9cblxuXG4gICAgaWYgKGJsb2NrLmxldmVsIDwgY3VycmVudExpc3QubGV2ZWwpIHtcbiAgICAgIC8vIEN1cnJlbnQgbGlzdCBoYXMgZW5kZWQsIGFuZCB3ZSBuZWVkIHRvIGhvb2sgdXAgd2l0aCBhIHBhcmVudCBvZiB0aGUgc2FtZSBsZXZlbCBhbmQgdHlwZVxuICAgICAgdmFyIG1hdGNoID0gZmluZExpc3RNYXRjaGluZyh0cmVlW3RyZWUubGVuZ3RoIC0gMV0sIGJsb2NrKTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGN1cnJlbnRMaXN0ID0gbWF0Y2g7XG4gICAgICAgIGN1cnJlbnRMaXN0LmNoaWxkcmVuLnB1c2goYmxvY2spO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gU2ltaWxhciBwYXJlbnQgY2FuJ3QgYmUgZm91bmQsIGFzc3VtZSBuZXcgbGlzdFxuXG5cbiAgICAgIGN1cnJlbnRMaXN0ID0gbGlzdEZyb21CbG9jayhibG9jayk7XG4gICAgICB0cmVlLnB1c2goY3VycmVudExpc3QpO1xuICAgICAgY29udGludWU7XG4gICAgfSAvLyBEaWZmZXJlbnQgbGlzdCBwcm9wcywgZGlmZmVyZW50IGxpc3Qgc3R5bGU/XG5cblxuICAgIGlmIChibG9jay5saXN0SXRlbSAhPT0gY3VycmVudExpc3QubGlzdEl0ZW0pIHtcbiAgICAgIHZhciBfbWF0Y2ggPSBmaW5kTGlzdE1hdGNoaW5nKHRyZWVbdHJlZS5sZW5ndGggLSAxXSwge1xuICAgICAgICBsZXZlbDogYmxvY2subGV2ZWxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX21hdGNoICYmIF9tYXRjaC5saXN0SXRlbSA9PT0gYmxvY2subGlzdEl0ZW0pIHtcbiAgICAgICAgY3VycmVudExpc3QgPSBfbWF0Y2g7XG4gICAgICAgIGN1cnJlbnRMaXN0LmNoaWxkcmVuLnB1c2goYmxvY2spO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRMaXN0ID0gbGlzdEZyb21CbG9jayhibG9jayk7XG4gICAgICAgIHRyZWUucHVzaChjdXJyZW50TGlzdCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuXG4gICAgY29uc29sZS53YXJuKCdVbmtub3duIHN0YXRlIGVuY291bnRlcmVkIGZvciBibG9jaycsIGJsb2NrKTtcbiAgICB0cmVlLnB1c2goYmxvY2spO1xuICB9XG5cbiAgcmV0dXJuIHRyZWU7XG59XG5cbmZ1bmN0aW9uIGlzTGlzdEJsb2NrKGJsb2NrKSB7XG4gIHJldHVybiBCb29sZWFuKGJsb2NrLmxpc3RJdGVtKTtcbn1cblxuZnVuY3Rpb24gYmxvY2tNYXRjaGVzTGlzdChibG9jaywgbGlzdCkge1xuICByZXR1cm4gYmxvY2subGV2ZWwgPT09IGxpc3QubGV2ZWwgJiYgYmxvY2subGlzdEl0ZW0gPT09IGxpc3QubGlzdEl0ZW07XG59XG5cbmZ1bmN0aW9uIGxpc3RGcm9tQmxvY2soYmxvY2spIHtcbiAgcmV0dXJuIHtcbiAgICBfdHlwZTogJ2xpc3QnLFxuICAgIF9rZXk6IFwiXCIuY29uY2F0KGJsb2NrLl9rZXksIFwiLXBhcmVudFwiKSxcbiAgICBsZXZlbDogYmxvY2subGV2ZWwsXG4gICAgbGlzdEl0ZW06IGJsb2NrLmxpc3RJdGVtLFxuICAgIGNoaWxkcmVuOiBbYmxvY2tdXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxhc3RDaGlsZChibG9jaykge1xuICByZXR1cm4gYmxvY2suY2hpbGRyZW4gJiYgYmxvY2suY2hpbGRyZW5bYmxvY2suY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG59XG5cbmZ1bmN0aW9uIGZpbmRMaXN0TWF0Y2hpbmcocm9vdE5vZGUsIG1hdGNoaW5nKSB7XG4gIHZhciBmaWx0ZXJPblR5cGUgPSB0eXBlb2YgbWF0Y2hpbmcubGlzdEl0ZW0gPT09ICdzdHJpbmcnO1xuXG4gIGlmIChyb290Tm9kZS5fdHlwZSA9PT0gJ2xpc3QnICYmIHJvb3ROb2RlLmxldmVsID09PSBtYXRjaGluZy5sZXZlbCAmJiBmaWx0ZXJPblR5cGUgJiYgcm9vdE5vZGUubGlzdEl0ZW0gPT09IG1hdGNoaW5nLmxpc3RJdGVtKSB7XG4gICAgcmV0dXJuIHJvb3ROb2RlO1xuICB9XG5cbiAgdmFyIG5vZGUgPSBsYXN0Q2hpbGQocm9vdE5vZGUpO1xuXG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmaW5kTGlzdE1hdGNoaW5nKG5vZGUsIG1hdGNoaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXN0TGlzdHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZXN0TGlzdHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJsb2Nrcykge1xuICByZXR1cm4gYmxvY2tzLm1hcChmdW5jdGlvbiAoYmxvY2spIHtcbiAgICBpZiAoYmxvY2suX2tleSkge1xuICAgICAgcmV0dXJuIGJsb2NrO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RBc3NpZ24oe1xuICAgICAgX2tleTogZ2V0U3RhdGljS2V5KGJsb2NrKVxuICAgIH0sIGJsb2NrKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNLZXkoaXRlbSkge1xuICByZXR1cm4gY2hlY2tzdW0oSlNPTi5zdHJpbmdpZnkoaXRlbSkpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXkEtWmEtejAtOV0vZywgJycpO1xufVxuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuXG5cbmZ1bmN0aW9uIGNoZWNrc3VtKHN0cikge1xuICB2YXIgaGFzaCA9IDA7XG4gIHZhciBzdHJsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGlmIChzdHJsZW4gPT09IDApIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RybGVuOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCAmPSBoYXNoOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBoYXNoO1xufVxuLyogZXNsaW50LWVuYWJsZSBuby1iaXR3aXNlICovXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZW5lcmF0ZUtleXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBpc0RlZmluZWQgPSBmdW5jdGlvbiBpc0RlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJztcbn07IC8vIFJlY3Vyc2l2ZWx5IG1lcmdlL3JlcGxhY2UgZGVmYXVsdCBzZXJpYWxpemVycyB3aXRoIHVzZXItc3BlY2lmaWVkIHNlcmlhbGl6ZXJzXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZVNlcmlhbGl6ZXJzKGRlZmF1bHRTZXJpYWxpemVycywgdXNlclNlcmlhbGl6ZXJzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkZWZhdWx0U2VyaWFsaXplcnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICB2YXIgdHlwZSA9IF90eXBlb2YoZGVmYXVsdFNlcmlhbGl6ZXJzW2tleV0pO1xuXG4gICAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFjY1trZXldID0gaXNEZWZpbmVkKHVzZXJTZXJpYWxpemVyc1trZXldKSA/IHVzZXJTZXJpYWxpemVyc1trZXldIDogZGVmYXVsdFNlcmlhbGl6ZXJzW2tleV07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgYWNjW2tleV0gPSBvYmplY3RBc3NpZ24oe30sIGRlZmF1bHRTZXJpYWxpemVyc1trZXldLCB1c2VyU2VyaWFsaXplcnNba2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY1trZXldID0gdHlwZW9mIHVzZXJTZXJpYWxpemVyc1trZXldID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRTZXJpYWxpemVyc1trZXldIDogdXNlclNlcmlhbGl6ZXJzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlU2VyaWFsaXplcnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBidWlsZE1hcmtzVHJlZSA9IHJlcXVpcmUoJy4vYnVpbGRNYXJrc1RyZWUnKTtcblxudmFyIG5lc3RMaXN0cyA9IHJlcXVpcmUoJy4vbmVzdExpc3RzJyk7XG5cbnZhciBnZW5lcmF0ZUtleXMgPSByZXF1aXJlKCcuL2dlbmVyYXRlS2V5cycpO1xuXG52YXIgbWVyZ2VTZXJpYWxpemVycyA9IHJlcXVpcmUoJy4vbWVyZ2VTZXJpYWxpemVycycpOyAvLyBQcm9wZXJ0aWVzIHRvIGV4dHJhY3QgZnJvbSBwcm9wcyBhbmQgcGFzcyB0byBzZXJpYWxpemVycyBhcyBvcHRpb25zXG5cblxudmFyIG9wdGlvblByb3BzID0gWydwcm9qZWN0SWQnLCAnZGF0YXNldCcsICdpbWFnZU9wdGlvbnMnXTtcblxudmFyIGlzRGVmaW5lZCA9IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBpbWFnZU9wdGlvbnM6IHt9XG59O1xuXG5mdW5jdGlvbiBibG9ja3NUb05vZGVzKGgsIHByb3BlcnRpZXMsIGRlZmF1bHRTZXJpYWxpemVycywgc2VyaWFsaXplU3Bhbikge1xuICB2YXIgcHJvcHMgPSBvYmplY3RBc3NpZ24oe30sIGRlZmF1bHRzLCBwcm9wZXJ0aWVzKTtcbiAgdmFyIHJhd0Jsb2NrcyA9IEFycmF5LmlzQXJyYXkocHJvcHMuYmxvY2tzKSA/IHByb3BzLmJsb2NrcyA6IFtwcm9wcy5ibG9ja3NdO1xuICB2YXIga2V5ZWRCbG9ja3MgPSBnZW5lcmF0ZUtleXMocmF3QmxvY2tzKTtcbiAgdmFyIGJsb2NrcyA9IG5lc3RMaXN0cyhrZXllZEJsb2NrcywgcHJvcHMubGlzdE5lc3RNb2RlKTtcbiAgdmFyIHNlcmlhbGl6ZXJzID0gbWVyZ2VTZXJpYWxpemVycyhkZWZhdWx0U2VyaWFsaXplcnMsIHByb3BzLnNlcmlhbGl6ZXJzIHx8IHt9KTtcbiAgdmFyIG9wdGlvbnMgPSBvcHRpb25Qcm9wcy5yZWR1Y2UoZnVuY3Rpb24gKG9wdHMsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzW2tleV07XG5cbiAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgb3B0c1trZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdHM7XG4gIH0sIHt9KTtcblxuICBmdW5jdGlvbiBzZXJpYWxpemVOb2RlKG5vZGUsIGluZGV4LCBzaWJsaW5ncywgaXNJbmxpbmUpIHtcbiAgICBpZiAoaXNMaXN0KG5vZGUpKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplTGlzdChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNMaXN0SXRlbShub2RlKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUxpc3RJdGVtKG5vZGUsIGZpbmRMaXN0SXRlbUluZGV4KG5vZGUsIHNpYmxpbmdzKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzU3Bhbihub2RlKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZVNwYW4obm9kZSwgc2VyaWFsaXplcnMsIGluZGV4LCB7XG4gICAgICAgIHNlcmlhbGl6ZU5vZGU6IHNlcmlhbGl6ZU5vZGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzZXJpYWxpemVCbG9jayhub2RlLCBpbmRleCwgaXNJbmxpbmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZExpc3RJdGVtSW5kZXgobm9kZSwgc2libGluZ3MpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWJsaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNpYmxpbmdzW2ldID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0xpc3RJdGVtKHNpYmxpbmdzW2ldKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBzZXJpYWxpemVCbG9jayhibG9jaywgaW5kZXgsIGlzSW5saW5lKSB7XG4gICAgdmFyIHRyZWUgPSBidWlsZE1hcmtzVHJlZShibG9jayk7XG4gICAgdmFyIGNoaWxkcmVuID0gdHJlZS5tYXAoZnVuY3Rpb24gKG5vZGUsIGksIHNpYmxpbmdzKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplTm9kZShub2RlLCBpLCBzaWJsaW5ncywgdHJ1ZSk7XG4gICAgfSk7XG4gICAgdmFyIGJsb2NrUHJvcHMgPSB7XG4gICAgICBrZXk6IGJsb2NrLl9rZXkgfHwgXCJibG9jay1cIi5jb25jYXQoaW5kZXgpLFxuICAgICAgbm9kZTogYmxvY2ssXG4gICAgICBpc0lubGluZTogaXNJbmxpbmUsXG4gICAgICBzZXJpYWxpemVyczogc2VyaWFsaXplcnMsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfTtcbiAgICByZXR1cm4gaChzZXJpYWxpemVycy5ibG9jaywgYmxvY2tQcm9wcywgY2hpbGRyZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VyaWFsaXplTGlzdEl0ZW0oYmxvY2ssIGluZGV4KSB7XG4gICAgdmFyIGtleSA9IGJsb2NrLl9rZXk7XG4gICAgdmFyIHRyZWUgPSBidWlsZE1hcmtzVHJlZShibG9jayk7XG4gICAgdmFyIGNoaWxkcmVuID0gdHJlZS5tYXAoc2VyaWFsaXplTm9kZSk7XG4gICAgcmV0dXJuIGgoc2VyaWFsaXplcnMubGlzdEl0ZW0sIHtcbiAgICAgIG5vZGU6IGJsb2NrLFxuICAgICAgc2VyaWFsaXplcnM6IHNlcmlhbGl6ZXJzLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAga2V5OiBrZXksXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VyaWFsaXplTGlzdChsaXN0KSB7XG4gICAgdmFyIHR5cGUgPSBsaXN0Lmxpc3RJdGVtO1xuICAgIHZhciBsZXZlbCA9IGxpc3QubGV2ZWw7XG4gICAgdmFyIGtleSA9IGxpc3QuX2tleTtcbiAgICB2YXIgY2hpbGRyZW4gPSBsaXN0LmNoaWxkcmVuLm1hcChzZXJpYWxpemVOb2RlKTtcbiAgICByZXR1cm4gaChzZXJpYWxpemVycy5saXN0LCB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9IC8vIERlZmF1bHQgdG8gZmFsc2UsIHNvIGB1bmRlZmluZWRgIHdpbGwgZXZhbHVhdGUgdG8gdGhlIGRlZmF1bHQgaGVyZVxuXG5cbiAgdmFyIHJlbmRlckNvbnRhaW5lck9uU2luZ2xlQ2hpbGQgPSBCb29sZWFuKHByb3BzLnJlbmRlckNvbnRhaW5lck9uU2luZ2xlQ2hpbGQpO1xuICB2YXIgbm9kZXMgPSBibG9ja3MubWFwKHNlcmlhbGl6ZU5vZGUpO1xuXG4gIGlmIChyZW5kZXJDb250YWluZXJPblNpbmdsZUNoaWxkIHx8IG5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY29udGFpbmVyUHJvcHMgPSBwcm9wcy5jbGFzc05hbWUgPyB7XG4gICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZVxuICAgIH0gOiB7fTtcbiAgICByZXR1cm4gaChzZXJpYWxpemVycy5jb250YWluZXIsIGNvbnRhaW5lclByb3BzLCBub2Rlcyk7XG4gIH1cblxuICBpZiAobm9kZXNbMF0pIHtcbiAgICByZXR1cm4gbm9kZXNbMF07XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIHNlcmlhbGl6ZXJzLmVtcHR5ID09PSAnZnVuY3Rpb24nID8gaChzZXJpYWxpemVycy5lbXB0eSkgOiBzZXJpYWxpemVycy5lbXB0eTtcbn1cblxuZnVuY3Rpb24gaXNMaXN0KGJsb2NrKSB7XG4gIHJldHVybiBibG9jay5fdHlwZSA9PT0gJ2xpc3QnICYmIGJsb2NrLmxpc3RJdGVtO1xufVxuXG5mdW5jdGlvbiBpc0xpc3RJdGVtKGJsb2NrKSB7XG4gIHJldHVybiBibG9jay5fdHlwZSA9PT0gJ2Jsb2NrJyAmJiBibG9jay5saXN0SXRlbTtcbn1cblxuZnVuY3Rpb24gaXNTcGFuKGJsb2NrKSB7XG4gIHJldHVybiB0eXBlb2YgYmxvY2sgPT09ICdzdHJpbmcnIHx8IGJsb2NrLm1hcmtzIHx8IGJsb2NrLl90eXBlID09PSAnc3Bhbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2tzVG9Ob2Rlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2Nrc1RvTm9kZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBnZXRJbWFnZVVybCA9IHJlcXVpcmUoJy4vZ2V0SW1hZ2VVcmwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaCwgc2VyaWFsaXplck9wdHMpIHtcbiAgdmFyIHNlcmlhbGl6ZU9wdGlvbnMgPSBzZXJpYWxpemVyT3B0cyB8fCB7XG4gICAgdXNlRGFzaGVkU3R5bGVzOiBmYWxzZSAvLyBMb3ctbGV2ZWwgYmxvY2sgc2VyaWFsaXplclxuXG4gIH07XG5cbiAgZnVuY3Rpb24gQmxvY2tTZXJpYWxpemVyKHByb3BzKSB7XG4gICAgdmFyIG5vZGUgPSBwcm9wcy5ub2RlLFxuICAgICAgICBzZXJpYWxpemVycyA9IHByb3BzLnNlcmlhbGl6ZXJzLFxuICAgICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcbiAgICAgICAgaXNJbmxpbmUgPSBwcm9wcy5pc0lubGluZSxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgYmxvY2tUeXBlID0gbm9kZS5fdHlwZTtcbiAgICB2YXIgc2VyaWFsaXplciA9IHNlcmlhbGl6ZXJzLnR5cGVzW2Jsb2NrVHlwZV07XG5cbiAgICBpZiAoIXNlcmlhbGl6ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gYmxvY2sgdHlwZSBcXFwiXCIuY29uY2F0KGJsb2NrVHlwZSwgXCJcXFwiLCBwbGVhc2Ugc3BlY2lmeSBhIHNlcmlhbGl6ZXIgZm9yIGl0IGluIHRoZSBgc2VyaWFsaXplcnMudHlwZXNgIHByb3BcIikpO1xuICAgIH1cblxuICAgIHJldHVybiBoKHNlcmlhbGl6ZXIsIHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgaXNJbmxpbmU6IGlzSW5saW5lXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9IC8vIExvdy1sZXZlbCBzcGFuIHNlcmlhbGl6ZXJcblxuXG4gIGZ1bmN0aW9uIFNwYW5TZXJpYWxpemVyKHByb3BzKSB7XG4gICAgdmFyIF9wcm9wcyRub2RlID0gcHJvcHMubm9kZSxcbiAgICAgICAgbWFyayA9IF9wcm9wcyRub2RlLm1hcmssXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzJG5vZGUuY2hpbGRyZW47XG4gICAgdmFyIGlzUGxhaW4gPSB0eXBlb2YgbWFyayA9PT0gJ3N0cmluZyc7XG4gICAgdmFyIG1hcmtUeXBlID0gaXNQbGFpbiA/IG1hcmsgOiBtYXJrLl90eXBlO1xuICAgIHZhciBzZXJpYWxpemVyID0gcHJvcHMuc2VyaWFsaXplcnMubWFya3NbbWFya1R5cGVdO1xuXG4gICAgaWYgKCFzZXJpYWxpemVyKSB7XG4gICAgICAvLyBAdG9kbyBSZXZlcnQgYmFjayB0byB0aHJvd2luZyBlcnJvcnM/XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiVW5rbm93biBtYXJrIHR5cGUgXFxcIlwiLmNvbmNhdChtYXJrVHlwZSwgXCJcXFwiLCBwbGVhc2Ugc3BlY2lmeSBhIHNlcmlhbGl6ZXIgZm9yIGl0IGluIHRoZSBgc2VyaWFsaXplcnMubWFya3NgIHByb3BcIikpO1xuICAgICAgcmV0dXJuIGgocHJvcHMuc2VyaWFsaXplcnMubWFya0ZhbGxiYWNrLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGgoc2VyaWFsaXplciwgcHJvcHMubm9kZSwgY2hpbGRyZW4pO1xuICB9IC8vIExvdy1sZXZlbCBsaXN0IHNlcmlhbGl6ZXJcblxuXG4gIGZ1bmN0aW9uIExpc3RTZXJpYWxpemVyKHByb3BzKSB7XG4gICAgdmFyIHRhZyA9IHByb3BzLnR5cGUgPT09ICdidWxsZXQnID8gJ3VsJyA6ICdvbCc7XG4gICAgcmV0dXJuIGgodGFnLCBudWxsLCBwcm9wcy5jaGlsZHJlbik7XG4gIH0gLy8gTG93LWxldmVsIGxpc3QgaXRlbSBzZXJpYWxpemVyXG5cblxuICBmdW5jdGlvbiBMaXN0SXRlbVNlcmlhbGl6ZXIocHJvcHMpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSAhcHJvcHMubm9kZS5zdHlsZSB8fCBwcm9wcy5ub2RlLnN0eWxlID09PSAnbm9ybWFsJyA/IC8vIERvbid0IHdyYXAgcGxhaW4gdGV4dCBpbiBwYXJhZ3JhcGhzIGluc2lkZSBvZiBhIGxpc3QgaXRlbVxuICAgIHByb3BzLmNoaWxkcmVuIDogLy8gQnV0IHdyYXAgYW55IG90aGVyIHN0eWxlIGluIHdoYXRldmVyIHRoZSBibG9jayBzZXJpYWxpemVyIHNheXMgdG8gdXNlXG4gICAgaChwcm9wcy5zZXJpYWxpemVycy50eXBlcy5ibG9jaywgcHJvcHMsIHByb3BzLmNoaWxkcmVuKTtcbiAgICByZXR1cm4gaCgnbGknLCBudWxsLCBjaGlsZHJlbik7XG4gIH0gLy8gUmVuZGVyZXIgb2YgYW4gYWN0dWFsIGJsb2NrIG9mIHR5cGUgYGJsb2NrYC4gQ29uZnVzaW5nLCB3ZSBrbm93LlxuXG5cbiAgZnVuY3Rpb24gQmxvY2tUeXBlU2VyaWFsaXplcihwcm9wcykge1xuICAgIHZhciBzdHlsZSA9IHByb3BzLm5vZGUuc3R5bGUgfHwgJ25vcm1hbCc7XG5cbiAgICBpZiAoL15oXFxkLy50ZXN0KHN0eWxlKSkge1xuICAgICAgcmV0dXJuIGgoc3R5bGUsIG51bGwsIHByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGUgPT09ICdibG9ja3F1b3RlJyA/IGgoJ2Jsb2NrcXVvdGUnLCBudWxsLCBwcm9wcy5jaGlsZHJlbikgOiBoKCdwJywgbnVsbCwgcHJvcHMuY2hpbGRyZW4pO1xuICB9IC8vIFNlcmlhbGl6ZXJzIGZvciB0aGluZ3MgdGhhdCBjYW4gYmUgZGlyZWN0bHkgYXR0cmlidXRlZCB0byBhIHRhZyB3aXRob3V0IGFueSBwcm9wc1xuICAvLyBXZSB1c2UgcGFydGlhbCBhcHBsaWNhdGlvbiB0byBkbyB0aGlzLCBwYXNzaW5nIHRoZSB0YWcgbmFtZSBhcyB0aGUgZmlyc3QgYXJndW1lbnRcblxuXG4gIGZ1bmN0aW9uIFJhd01hcmtTZXJpYWxpemVyKHRhZywgcHJvcHMpIHtcbiAgICByZXR1cm4gaCh0YWcsIG51bGwsIHByb3BzLmNoaWxkcmVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFVuZGVybGluZVNlcmlhbGl6ZXIocHJvcHMpIHtcbiAgICB2YXIgc3R5bGUgPSBzZXJpYWxpemVPcHRpb25zLnVzZURhc2hlZFN0eWxlcyA/IHtcbiAgICAgICd0ZXh0LWRlY29yYXRpb24nOiAndW5kZXJsaW5lJ1xuICAgIH0gOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSdcbiAgICB9O1xuICAgIHJldHVybiBoKCdzcGFuJywge1xuICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSwgcHJvcHMuY2hpbGRyZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gU3RyaWtlVGhyb3VnaFNlcmlhbGl6ZXIocHJvcHMpIHtcbiAgICByZXR1cm4gaCgnZGVsJywgbnVsbCwgcHJvcHMuY2hpbGRyZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gTGlua1NlcmlhbGl6ZXIocHJvcHMpIHtcbiAgICByZXR1cm4gaCgnYScsIHtcbiAgICAgIGhyZWY6IHByb3BzLm1hcmsuaHJlZlxuICAgIH0sIHByb3BzLmNoaWxkcmVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEltYWdlU2VyaWFsaXplcihwcm9wcykge1xuICAgIGlmICghcHJvcHMubm9kZS5hc3NldCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGltZyA9IGgoJ2ltZycsIHtcbiAgICAgIHNyYzogZ2V0SW1hZ2VVcmwocHJvcHMpXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb3BzLmlzSW5saW5lID8gaW1nIDogaCgnZmlndXJlJywgbnVsbCwgaW1nKTtcbiAgfSAvLyBTZXJpYWxpemVyIHRoYXQgcmVjdXJzaXZlbHkgY2FsbHMgaXRzZWxmLCBwcm9kdWNpbmcgYSBoeXBlcnNjcmlwdCB0cmVlIG9mIHNwYW5zXG5cblxuICBmdW5jdGlvbiBzZXJpYWxpemVTcGFuKHNwYW4sIHNlcmlhbGl6ZXJzLCBpbmRleCwgb3B0aW9ucykge1xuICAgIGlmIChzcGFuID09PSAnXFxuJyAmJiBzZXJpYWxpemVycy5oYXJkQnJlYWspIHtcbiAgICAgIHJldHVybiBoKHNlcmlhbGl6ZXJzLmhhcmRCcmVhaywge1xuICAgICAgICBrZXk6IFwiaGItXCIuY29uY2F0KGluZGV4KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzcGFuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZXJzLnRleHQgPyBoKHNlcmlhbGl6ZXJzLnRleHQsIHtcbiAgICAgICAga2V5OiBcInRleHQtXCIuY29uY2F0KGluZGV4KVxuICAgICAgfSwgc3BhbikgOiBzcGFuO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbjtcblxuICAgIGlmIChzcGFuLmNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbiA9IHtcbiAgICAgICAgY2hpbGRyZW46IHNwYW4uY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLnNlcmlhbGl6ZU5vZGUoY2hpbGQsIGksIHNwYW4uY2hpbGRyZW4sIHRydWUpO1xuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZE5vZGUgPSBvYmplY3RBc3NpZ24oe30sIHNwYW4sIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gaChzZXJpYWxpemVycy5zcGFuLCB7XG4gICAgICBrZXk6IHNwYW4uX2tleSB8fCBcInNwYW4tXCIuY29uY2F0KGluZGV4KSxcbiAgICAgIG5vZGU6IHNlcmlhbGl6ZWROb2RlLFxuICAgICAgc2VyaWFsaXplcnM6IHNlcmlhbGl6ZXJzXG4gICAgfSk7XG4gIH1cblxuICB2YXIgSGFyZEJyZWFrU2VyaWFsaXplciA9IGZ1bmN0aW9uIEhhcmRCcmVha1NlcmlhbGl6ZXIoKSB7XG4gICAgcmV0dXJuIGgoJ2JyJyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRNYXJrU2VyaWFsaXplcnMgPSB7XG4gICAgc3Ryb25nOiBSYXdNYXJrU2VyaWFsaXplci5iaW5kKG51bGwsICdzdHJvbmcnKSxcbiAgICBlbTogUmF3TWFya1NlcmlhbGl6ZXIuYmluZChudWxsLCAnZW0nKSxcbiAgICBjb2RlOiBSYXdNYXJrU2VyaWFsaXplci5iaW5kKG51bGwsICdjb2RlJyksXG4gICAgdW5kZXJsaW5lOiBVbmRlcmxpbmVTZXJpYWxpemVyLFxuICAgICdzdHJpa2UtdGhyb3VnaCc6IFN0cmlrZVRocm91Z2hTZXJpYWxpemVyLFxuICAgIGxpbms6IExpbmtTZXJpYWxpemVyXG4gIH07XG4gIHZhciBkZWZhdWx0U2VyaWFsaXplcnMgPSB7XG4gICAgLy8gQ29tbW9uIG92ZXJyaWRlc1xuICAgIHR5cGVzOiB7XG4gICAgICBibG9jazogQmxvY2tUeXBlU2VyaWFsaXplcixcbiAgICAgIGltYWdlOiBJbWFnZVNlcmlhbGl6ZXJcbiAgICB9LFxuICAgIG1hcmtzOiBkZWZhdWx0TWFya1NlcmlhbGl6ZXJzLFxuICAgIC8vIExlc3MgY29tbW9uIG92ZXJyaWRlc1xuICAgIGxpc3Q6IExpc3RTZXJpYWxpemVyLFxuICAgIGxpc3RJdGVtOiBMaXN0SXRlbVNlcmlhbGl6ZXIsXG4gICAgYmxvY2s6IEJsb2NrU2VyaWFsaXplcixcbiAgICBzcGFuOiBTcGFuU2VyaWFsaXplcixcbiAgICBoYXJkQnJlYWs6IEhhcmRCcmVha1NlcmlhbGl6ZXIsXG4gICAgLy8gQ29udGFpbmVyIGVsZW1lbnRcbiAgICBjb250YWluZXI6ICdkaXYnLFxuICAgIC8vIFdoZW4gd2UgY2FuJ3QgcmVzb2x2ZSB0aGUgbWFyayBwcm9wZXJseSwgdXNlIHRoaXMgcmVuZGVyZXIgYXMgdGhlIGNvbnRhaW5lclxuICAgIG1hcmtGYWxsYmFjazogJ3NwYW4nLFxuICAgIC8vIEFsbG93IG92ZXJyaWRpbmcgdGV4dCByZW5kZXJlciwgYnV0IGxlYXZlIHVuZGVmaW5lZCB0byBqdXN0IHVzZSBwbGFpbiBzdHJpbmdzIGJ5IGRlZmF1bHRcbiAgICB0ZXh0OiB1bmRlZmluZWQsXG4gICAgLy8gRW1wdHkgbm9kZXMgKFJlYWN0IHVzZXMgbnVsbCwgaHlwZXJzY3JpcHQgd2l0aCBlbXB0eSBzdHJpbmdzKVxuICAgIGVtcHR5OiAnJ1xuICB9O1xuICByZXR1cm4ge1xuICAgIGRlZmF1bHRTZXJpYWxpemVyczogZGVmYXVsdFNlcmlhbGl6ZXJzLFxuICAgIHNlcmlhbGl6ZVNwYW46IHNlcmlhbGl6ZVNwYW5cbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXJpYWxpemVycy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGh5cGVyc2NyaXB0ID0gcmVxdWlyZSgnaHlwZXJzY3JpcHQnKTtcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIGdldEltYWdlVXJsID0gcmVxdWlyZSgnLi9nZXRJbWFnZVVybCcpO1xuXG52YXIgYmxvY2tzVG9Ob2RlcyA9IHJlcXVpcmUoJy4vYmxvY2tzVG9Ob2RlcycpO1xuXG52YXIgZ2V0U2VyaWFsaXplcnMgPSByZXF1aXJlKCcuL3NlcmlhbGl6ZXJzJyk7XG5cbnZhciByZW5kZXJOb2RlID0gZnVuY3Rpb24gcmVuZGVyTm9kZShzZXJpYWxpemVyLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcHMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2Ygc2VyaWFsaXplciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzZXJpYWxpemVyKG9iamVjdEFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH0pKTtcbiAgfVxuXG4gIHZhciB0YWcgPSBzZXJpYWxpemVyO1xuICB2YXIgY2hpbGROb2RlcyA9IHByb3BzLmNoaWxkcmVuIHx8IGNoaWxkcmVuO1xuICByZXR1cm4gaHlwZXJzY3JpcHQodGFnLCBwcm9wcywgY2hpbGROb2Rlcyk7XG59O1xuXG52YXIgX2dldFNlcmlhbGl6ZXJzID0gZ2V0U2VyaWFsaXplcnMocmVuZGVyTm9kZSwge1xuICB1c2VEYXNoZWRTdHlsZXM6IHRydWVcbn0pLFxuICAgIGRlZmF1bHRTZXJpYWxpemVycyA9IF9nZXRTZXJpYWxpemVycy5kZWZhdWx0U2VyaWFsaXplcnMsXG4gICAgc2VyaWFsaXplU3BhbiA9IF9nZXRTZXJpYWxpemVycy5zZXJpYWxpemVTcGFuO1xuXG52YXIgYmxvY2tDb250ZW50VG9IeXBlcnNjcmlwdCA9IGZ1bmN0aW9uIGJsb2NrQ29udGVudFRvSHlwZXJzY3JpcHQob3B0aW9ucykge1xuICByZXR1cm4gYmxvY2tzVG9Ob2RlcyhyZW5kZXJOb2RlLCBvcHRpb25zLCBkZWZhdWx0U2VyaWFsaXplcnMsIHNlcmlhbGl6ZVNwYW4pO1xufTsgLy8gRXhwb3NlIGRlZmF1bHQgc2VyaWFsaXplcnMgdG8gdGhlIHVzZXJcblxuXG5ibG9ja0NvbnRlbnRUb0h5cGVyc2NyaXB0LmRlZmF1bHRTZXJpYWxpemVycyA9IGRlZmF1bHRTZXJpYWxpemVyczsgLy8gRXhwb3NlIGxvZ2ljIGZvciBidWlsZGluZyBpbWFnZSBVUkxzIGZyb20gYW4gaW1hZ2UgcmVmZXJlbmNlL25vZGVcblxuYmxvY2tDb250ZW50VG9IeXBlcnNjcmlwdC5nZXRJbWFnZVVybCA9IGdldEltYWdlVXJsOyAvLyBFeHBvc2Ugbm9kZSByZW5kZXJlclxuXG5ibG9ja0NvbnRlbnRUb0h5cGVyc2NyaXB0LnJlbmRlck5vZGUgPSByZW5kZXJOb2RlO1xubW9kdWxlLmV4cG9ydHMgPSBibG9ja0NvbnRlbnRUb0h5cGVyc2NyaXB0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmxvY2tzVG9IeXBlclNjcmlwdCA9IHJlcXVpcmUoJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1oeXBlcnNjcmlwdCcpO1xuXG52YXIgaCA9IGJsb2Nrc1RvSHlwZXJTY3JpcHQucmVuZGVyTm9kZTtcbnZhciBibG9ja3NUb0h0bWwgPSBmdW5jdGlvbiBibG9ja3NUb0h0bWwob3B0aW9ucykge1xuICB2YXIgcm9vdE5vZGUgPSBibG9ja3NUb0h5cGVyU2NyaXB0KG9wdGlvbnMpO1xuICByZXR1cm4gcm9vdE5vZGUub3V0ZXJIVE1MIHx8IHJvb3ROb2RlO1xufTtcblxuYmxvY2tzVG9IdG1sLmRlZmF1bHRTZXJpYWxpemVycyA9IGJsb2Nrc1RvSHlwZXJTY3JpcHQuZGVmYXVsdFNlcmlhbGl6ZXJzO1xuYmxvY2tzVG9IdG1sLmdldEltYWdlVXJsID0gYmxvY2tzVG9IeXBlclNjcmlwdC5nZXRJbWFnZVVybDtcbmJsb2Nrc1RvSHRtbC5yZW5kZXJOb2RlID0gaDtcbmJsb2Nrc1RvSHRtbC5oID0gaDtcblxubW9kdWxlLmV4cG9ydHMgPSBibG9ja3NUb0h0bWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja3NUb0h0bWwuanMubWFwIl0sIm5hbWVzIjpbInNwbGl0IiwiQ2xhc3NMaXN0IiwidXJsQnVpbGRlciIsImlzRGVmaW5lZCIsIm5lc3RMaXN0cyIsImJ1aWxkTWFya3NUcmVlIiwiZ2V0U2VyaWFsaXplcnMiLCJibG9ja3NUb05vZGVzIiwiYmxvY2tzVG9IeXBlclNjcmlwdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7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
