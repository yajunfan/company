	/**
	 * designed by tianxinyang
	 * 2015年9月19日18:39:46
	 * 处理数据量巨大的写入问题
	 * 参数说明：
	 * data.listData:要写入的json数组参数
	 * per:每次写入多少条数据
	 * time:每几秒写一次
	 * fun:调用的写入的函数
	 *	var tw={
			listData:data.listData,
			per:20,
			time:0,
			fun:writeInfo
		}
	 
	 
	 */

	var timeTT = "";
	var indexK2 = 0 ;
	var DATAing = "";
	var totalPageTW = 0 ;
	function timeWrite(tw){
		DATAing = tw.listData;
		var per = tw.per;
		var time = tw.time;
		var fun = tw.fun;
		var delay = time*1000;
		var size = DATAing.length;
		totalPageTW = size/per;
		for(var indexK=0;indexK<totalPageTW;indexK++){//","+totalPage+
			timeTT = setTimeout("info("+per+","+fun+")",indexK*delay);
		}
	}
	function info(per,fun){
		var vData = {};
		var g = 0 ;
		var indexK3 = 0 ;
		totalPageTW-indexK2<1?indexK3 = totalPageTW*per:indexK3 = (indexK2+1)*per ;
		for(var i=indexK2*per ; i<indexK3 ;i++){
			if(typeof(DATAing[i])!=undefined){
				//vData[g] = DATAing[i];   //重新定义下标
				vData[i] = DATAing[i];	   //连续定义下标	
				//console.info(i+":"+g);
			}
			g++;
		}
		console.info(indexK2+":"+(indexK3-1)+":"+typeof(DATAing[indexK3-1])+"-------->the end of the real data.");
		//console.info(totalPageTW-indexK2);
		totalPageTW-indexK2<1?console.info(indexK2+":"+indexK3+":"+typeof(DATAing[indexK3])):"";
		indexK2++;
		fun(vData);
	}