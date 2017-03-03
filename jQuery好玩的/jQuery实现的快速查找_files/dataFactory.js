	/**
	 * designed by tianxinyang
	 * 2015年10月5日23:24:58
	 * 处理数据量巨大的写入问题
	 * 参数说明：
	 * var df={
		listData:data.listData,
		size:4000
	}
	 * 
	 */
	
	function dataFactory (df) {
		var per = df.listData.length;
		console.info("per:"+per);
		totalPageDF = df.size/per;
		console.info("totalPageDF:"+totalPageDF);
		var DF_Data = {};
		var df_indexK1 = 0 ;
		for(var df_indexK2=0;df_indexK2<totalPageDF;df_indexK2++){
			var reset_index = 0;
			totalPageDF-df_indexK2<1?df_indexK1 = totalPageDF*per:df_indexK1 = (df_indexK2+1)*per ;
			for(var i =  df_indexK2*per;i < df_indexK1 ; i++){
				//console.info(i);
				if(typeof(df.listData[i])!=undefined){
					DF_Data[i] = df.listData[reset_index];	   //连续分批重新定义下标	
					reset_index ++;
				}
			}
			console.info(df_indexK2+":"+(df_indexK1-1)+":"+typeof(DF_Data[df_indexK1-1])+"-------->the end of the real data.");
			totalPageDF-df_indexK2<1?console.info(df_indexK2+":"+df_indexK1+":"+typeof(DF_Data[df_indexK1])):"";
		}
		df.fun(DF_Data);
	}
