(function(){tinymce.PluginManager.requireLangPack("groupdocs_comparison");tinymce.create("tinymce.plugins.Groupdocs_comparisonPlugin",{init:function(a,b){a.addCommand("mceGroupdocsComparison",function(){a.windowManager.open({file:b+"/groupdocs_comparison.htm",width:320+parseInt(a.getLang("groupdocs_comparison.delta_width",0)),height:200/*+parseInt(a.getLang("groupdocs.delta_height",0))*/,inline:1},{plugin_url:b,some_custom_arg:"custom arg"})});a.addButton("groupdocs_comparison",{title:"groupdocs_comparison.desc",cmd:"mceGroupdocsComparison",image:b+"/img/groupdocs.gif"});a.onNodeChange.add(function(d,c,e){c.setActive("groupdocs_comparison",e.nodeName=="IMG")})},createControl:function(b,a){return null},getInfo:function(){return{longname:"Groupdocs Comparison plugin",author:"Some author",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/groupdocs",version:"1.0"}}});tinymce.PluginManager.add("groupdocs_comparison",tinymce.plugins.Groupdocs_comparisonPlugin)})();